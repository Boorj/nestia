/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IPerformance } from "../../structures/IPerformance";

/**
 * @controller PerformanceController.get()
 * @path GET /performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function get(connection: IConnection): Promise<get.Output> {
    return Fetcher.fetch(connection, get.ENCRYPTED, get.METHOD, get.path());
}
export namespace get {
    export type Output = IPerformance;

    export const METHOD = "GET" as const;
    export const PATH: string = "/performance";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string {
        return `/performance`;
    }
}
