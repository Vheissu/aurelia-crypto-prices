import { Api } from './services/api';

import config from './config.json';

export class MyApp {
  private prices = {};

  constructor(private api: Api) {

  }

  async binding(): Promise<void> {
    this.prices = await this.api.getPrices(config.coins);
  }
}
