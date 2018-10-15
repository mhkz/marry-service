import {Controller, Get} from "@nestjs/common";
import { InvitationService } from '../invitation/invitation.service';
import { BlessService } from '../bless/bless.service';
import { CommentService } from '../comment/comment.service';

@Controller('map')
export class MapController {
  constructor(private readonly invitationService: InvitationService){}
  @Get()
  async getMapInfo () {
   return {
     mainInfo: await this.invitationService.getAllUser()[0]
   }
  }
}