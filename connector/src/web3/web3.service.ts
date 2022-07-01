import '@polkadot/api-augment';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Web3 from "web3";

@Injectable()
export class Web3Service {
  web3: Web3 | undefined;

  constructor(private readonly config: ConfigService) {}

  buildApi() {
    if (!this.web3) {
      console.log(Web3)
      const web3Provider = new Web3.providers.HttpProvider(this.config.get('web3.endpoint'));
      this.web3 = new Web3(web3Provider);
    }

    return this.web3;
  }

  async getBlockHeight() {
    // const web3 = this.buildApi()
    // const blockHeight = web3.eth.getBlockNumber();
    // console.log("schedule","blockHeight:",blockHeight);
    console.log(Web3.providers)
  }
}
