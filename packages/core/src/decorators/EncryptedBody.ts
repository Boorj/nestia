import { IEncryptionPassword } from "@nestia/fetcher/lib/IEncryptionPassword";
import { AesPkcs5 } from "@nestia/fetcher/lib/internal/AesPkcs5";
import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from "@nestjs/common";
import type express from "express";
import type { FastifyRequest } from "fastify";
import { assert, is, validate } from "typia";

import { IRequestBodyValidator } from "../options/IRequestBodyValidator";
import { Singleton } from "../utils/Singleton";
import { ENCRYPTION_METADATA_KEY } from "./internal/EncryptedConstant";
import { get_binary_body } from "./internal/get_binary_body";
import { headers_to_object } from "./internal/headers_to_object";
import { validate_request_body } from "./internal/validate_request_body";

/**
 * Encrypted body decorator.
 *
 * `EncryptedBody` is a decorator function getting `application/json` typed data from
 * requeset body which has been encrypted by AES-128/256 algorithm. Also,
 * `EncyrptedBody` validates the request body data type through
 * [typia](https://github.com/samchon/typia) ad the validation speed is
 * maximum 15,000x times faster than `class-validator`.
 *
 * For reference, when the request body data is not following the promised type `T`,
 * `BadRequestException` error (status code: 400) would be thrown. Also,
 * `EncryptedRoute` decrypts request body using those options.
 *
 *  - AES-128/256
 *  - CBC mode
 *  - PKCS #5 Padding
 *  - Base64 Encoding
 *
 * @return Parameter decorator
 * @author Jeongho Nam - https://github.com/samchon
 */
export function EncryptedBody<T>(
  validator?: IRequestBodyValidator<T>,
): ParameterDecorator {
  const checker = validate_request_body("EncryptedBody")(validator);
  return createParamDecorator(async function EncryptedBody(
    _unknown: any,
    context: ExecutionContext,
  ) {
    const request: express.Request | FastifyRequest = context
      .switchToHttp()
      .getRequest();
    if (isApplicationOctetStream(request.headers["content-type"]) === false)
      throw new BadRequestException(
        `Request body type is not "application/octet-stream".`,
      );

    const param: IEncryptionPassword | IEncryptionPassword.Closure | undefined =
      Reflect.getMetadata(ENCRYPTION_METADATA_KEY, context.getClass());
    if (!param)
      throw new Error(
        "Error on nestia.core.EncryptedBody(): no encryption password is given.",
      );

    // GET BODY DATA
    const headers: Singleton<Record<string, string>> = new Singleton(() =>
      headers_to_object(request.headers),
    );
    const raw: Uint8Array = await get_binary_body(request);
    if (raw.length === 0) return;

    // PARSE AND VALIDATE DATA
    const password: IEncryptionPassword =
      typeof param === "function"
        ? param({ headers: headers.get(), body: raw, direction: "decode" })
        : param;
    const data: any = JSON.parse(
      new TextDecoder().decode(decrypt(raw, password.key, password.iv)),
    );
    const error: Error | null = checker(data);
    if (error !== null) throw error;
    return data;
  })();
}
Object.assign(EncryptedBody, is);
Object.assign(EncryptedBody, assert);
Object.assign(EncryptedBody, validate);

/**
 * @internal
 */
const decrypt = (body: Uint8Array, key: string, iv: string): Uint8Array => {
  try {
    return AesPkcs5.decrypt(body, key, iv);
  } catch (exp) {
    if (exp instanceof Error)
      throw new BadRequestException(
        "Failed to decrypt the request body. Check your body content or encryption password.",
      );
    else throw exp;
  }
};

const isApplicationOctetStream = (text?: string): boolean =>
  text !== undefined &&
  text
    .split(";")
    .map((str) => str.trim())
    .some((str) => str === "application/octet-stream");
