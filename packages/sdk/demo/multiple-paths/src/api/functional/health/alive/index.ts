/**
 * @packageDocumentation
 * @module api.functional.health.alive
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

/**
 * @controller HealthController.check()
 * @path GET /health/alive
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function check(connection: IConnection): Promise<void> {
    return Fetcher.fetch(
        connection,
        check.ENCRYPTED,
        check.METHOD,
        check.path(),
    );
}
export namespace check {
    export const METHOD = "GET" as const;
    export const PATH: string = "/health/alive";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string {
        return `/health/alive`;
    }
}
