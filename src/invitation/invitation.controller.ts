import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { InvitationEntity } from "./invitation.entity";
import { InvitationService } from "./invitation.service";
import { BlessService } from '../bless/bless.service'
import { CommentService } from '../comment/comment.service';

@Controller('invitation')
export class InvitationController {
    constructor(private readonly invitationService: InvitationService,
                private readonly blessService: BlessService,
                private readonly commentService: CommentService){}
    @Get()
    async getInvitation () {
        let wxInfo = {
          mainInfo: {},
          zanLog: [],
          zanNum: 0,
          slideList: [],
          music_url: '',
          chatList: [],
          chatNum: 0
        }

        var indexInfo = await this.invitationService.getAllUser();
         var bless = await this.blessService.getAllBless();
         var comment = await this.commentService.getAllComment();
        wxInfo.mainInfo = indexInfo[0];
        wxInfo.zanLog = bless;
        wxInfo.zanNum = bless.length;
        wxInfo.slideList = [];
        wxInfo.music_url = '';
        wxInfo.chatList = comment;
        wxInfo.chatNum = comment.length;
        return wxInfo;
    }

    @Post()
    async create(@Res() res, @Body() user: InvitationEntity) {
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}