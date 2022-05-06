import helper from "nestia-helper";

import { IPage } from "../../api/structures/common/IPage";
import { ISaleEntireArtcle } from "../../api/structures/sales/articles/ISaleEntireArticle";

export abstract class SaleEntireArticlesController
{
    @helper.EncryptedRoute.Patch()
    public async index
        (
            @helper.TypedParam("section", "string") section: string, 
            @helper.TypedParam("saleId", "number") saleId: number, 
            @helper.EncryptedBody() input: IPage.IRequest
        ): Promise<IPage<ISaleEntireArtcle.ISummary>>
    {
        return null!;
    }

    @helper.EncryptedRoute.Get(":id")
    public async at
        (
            @helper.TypedParam("section", "string") section: string, 
            @helper.TypedParam("saleId", "number") saleId: number, 
            @helper.TypedParam("id", "number") id: number
        ): Promise<ISaleEntireArtcle>
    {
        return null!;
    }
}