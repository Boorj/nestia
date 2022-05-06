/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.entire
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IPage } from "./../../../../structures/common/IPage";
import type { ISaleEntireArtcle } from "./../../../../structures/sales/articles/ISaleEntireArticle";

/**
 * @controller ConsumerSaleEntireArticlesController.index()
 * @path PATCH /consumers/:section/sales/:saleId/entire
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Input>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId),
        input
    );
}
export namespace index
{
    export type Input = Primitive<IPage.IRequest<string>>;
    export type Output = Primitive<IPage<ISaleEntireArtcle.ISummary>>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/entire`;
    }
}

/**
 * @controller ConsumerSaleEntireArticlesController.at()
 * @path GET /consumers/:section/sales/:saleId/entire/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = Primitive<ISaleEntireArtcle>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${section}/sales/${saleId}/entire/${id}`;
    }
}