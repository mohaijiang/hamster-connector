import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import {Web3Module} from "./web3/web3.module";

const appImports = [
  ConfigModule.forRoot({ load: [configuration] })
];

@Module({
  imports: [...appImports,Web3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
