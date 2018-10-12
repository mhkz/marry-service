import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationEntity } from './invitation.entity';
import { BlessEntity } from '../bless/bless.entity';
import { BlessService } from '../bless/bless.service';
import { CommentService } from '../comment/comment.service';
import { CommentEntity } from '../comment/comment.entity';
@Module({
    imports: [TypeOrmModule.forFeature([InvitationEntity, BlessEntity, CommentEntity])],
    controllers: [InvitationController],
    providers: [InvitationService, BlessService, CommentService]
})
export class InvitationModule {}