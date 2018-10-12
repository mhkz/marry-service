import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { InvitationEntity } from "./invitation.entity";
import { InvitationService } from "./invitation.service";
import { BlessService } from '../bless/bless.service'
import { CommentService } from '../comment/comment.service';
import { DateUtils} from '../utils/dateUtils';

@Controller('invitation')
export class InvitationController {
    constructor(private readonly invitationService: InvitationService,
                private readonly blessService: BlessService,
                private readonly commentService: CommentService){}
    @Get()
    async getInvitation (@Req() req) {
      var reqInfo = req.query;
      if (reqInfo.c == 'info') {
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
        wxInfo.music_url = indexInfo[0].music;
        wxInfo.chatList = comment;
        wxInfo.chatNum = comment.length;
        return wxInfo;
      } else if (reqInfo.c == 'zan') {
        var zanInfo = {
          id: (await this.blessService.getAllBless()).length + 1,
          user_id: 7,
          openid: 'null',
          face: reqInfo.face,
          nickname: reqInfo.nickname,
          time: new DateUtils().showTime()
        }
        await this.blessService.create(zanInfo);
        return '赞成功'
      } else if (reqInfo.c == 'send') {
        var comm = {
          id: (await this.commentService.getAllComment()).length + 1,
          user_id: 7,
          face: reqInfo.face,
          nickname: reqInfo.nickname,
          words: reqInfo.words,
          time: new DateUtils().showTime()
        }
        await this.commentService.create(comm);
        return '评论成功'
      }

    }

    @Post()
    async create(@Res() res, @Body() user: InvitationEntity) {
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}