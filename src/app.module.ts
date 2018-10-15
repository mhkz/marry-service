import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {InvitationModule} from "./invitation/invitation.module";
import {BlessModule} from "./bless/bless.module";
import {CommentModule} from "./comment/comment.module";
import { PhotoModule } from './photo/photo.module';
import { MapModule } from './map/map.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      InvitationModule,
      BlessModule,
      PhotoModule,
      MapModule,
      CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
