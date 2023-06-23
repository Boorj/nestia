/**
 * @packageDocumentation
 * @module api.functional.route
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IBbsArticle } from "./../../structures/IBbsArticle";

/**
 * @controller ManualRouteController.random()
 * @path GET /route/random
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function random(
    connection: IConnection,
): Promise<random.Output> {
    return Fetcher.fetch(
        connection,
        random.ENCRYPTED,
        random.METHOD,
        random.path(),
    );
}
export namespace random {
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/route/random";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/route/random`;
    }
}