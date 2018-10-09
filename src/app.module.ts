import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BlessModule} from "./bless/bless.module";

@Module({
  imports: [BlessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
