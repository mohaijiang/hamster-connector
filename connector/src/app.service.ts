import { Injectable } from '@nestjs/common';
import {Web3Service} from "./web3/web3.service";

@Injectable()
export class AppService {

  constructor(
      private readonly web3Service: Web3Service,
  ) {}

  getHello(): string {
    this.web3Service.getBlockHeight().then()
    return 'Hello World!';
  }
}
