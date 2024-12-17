import { IHttpClient } from '@aurelia/fetch-client';
import { inject } from 'aurelia';

@inject(IHttpClient)
export class Api {
    constructor(private http: IHttpClient) {
        this.http.configure(c => {
            c.withBaseUrl('https://api.coingecko.com/api/v3/');

            return c;
        })
    }

    async getPrices(ids: string[]): Promise<unknown> {
        try {
            const request = await this.http.fetch(`simple/price?ids=${ids.toString()}&vs_currencies=usd`);

            return request.json();
        } catch (e) {
            return e;
        }
    }
}