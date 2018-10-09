import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationEntity } from 'entities/invitation.entity';
@Module({
    imports: [TypeOrmModule.forFeature([InvitationEntity])],
    controllers: [InvitationController],
    providers: [InvitationService]
})
export class InvitationModule {}