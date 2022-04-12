/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.questions
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";
import { assertType } from "typescript-is";

import type { ISaleInquiry } from "./../../../../structures/sales/articles/ISaleInquiry";
import type { ISaleArticle } from "./../../../../structures/sales/articles/ISaleArticle";
import type { IPage } from "./../../../../structures/common/IPage";

/**
 * Store a new inquiry.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param input Content to archive
 * @return Newly archived inquiry
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleQuestionsController.store()
 * @path POST /consumers/:section/sales/:saleId/questions
 */
export function store
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section, saleId),
        input
    );
}
export namespace store
{
    export type Input = Primitive<ISaleInquiry.IStore>;
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/questions";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/questions`;
    }
}

/**
 * Update an inquiry.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the target article to be updated
 * @param input New content to be overwritten
 * @return The inquiry record after the update
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when the article is not yours
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleQuestionsController.update()
 * @path POST /consumers/:section/sales/:saleId/questions/:id
 */
export function update
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number,
        input: Primitive<update.Input>
    ): Promise<update.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof id>(id);
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(section, saleId, id),
        input
    );
}
export namespace update
{
    export type Input = Primitive<ISaleInquiry.IStore>;
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/questions/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${section}/sales/${saleId}/questions/${id}`;
    }
}

/**
 * Remove an inquiry.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the target article to be erased
 * @return Empty object
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when the article is not yours
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleQuestionsController.remove()
 * @path DELETE /consumers/:section/sales/:saleId/questions/:id
 */
export function remove
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<void>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof id>(id);

    return Fetcher.fetch
    (
        connection,
        remove.ENCRYPTED,
        remove.METHOD,
        remove.path(section, saleId, id)
    );
}
export namespace remove
{

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/questions/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${section}/sales/${saleId}/questions/${id}`;
    }
}

/**
 * Get page of summarized inquiries.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param input Information about pagination and searching
 * @return Page of the inquiries
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleQuestionsController.index()
 * @path GET /consumers/:section/sales/:saleId/questions
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Query>
    ): Promise<index.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId, input)
    );
}
export namespace index
{
    export type Query = Primitive<ISaleInquiry.IRequest>;
    export type Output = Primitive<IPage<ISaleInquiry.ISummary>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/questions";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, input: ISaleInquiry.IRequest): string
    {
        return `/consumers/${section}/sales/${saleId}/questions?${new URLSearchParams(input as any).toString()}`;
    }
}

/**
 * Get detailed record of an inquiry
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the Target inquiry
 * @return Detailed record of the inquiry
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleQuestionsController.at()
 * @path GET /consumers/:section/sales/:saleId/questions/:id
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof id>(id);

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
    export type Output = Primitive<ISaleInquiry<ISaleArticle.IContent>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/questions/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${section}/sales/${saleId}/questions/${id}`;
    }
}

