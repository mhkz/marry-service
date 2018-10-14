import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";
import { DateUtils } from '../utils/dateUtils';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}
    @Get()
    async getComment (@Req() req) {
      var queryInfo = req.query
      if (queryInfo.c == 'info') {
        var zanLog = await this.commentService.getAllComment();
        return {
          chatList: zanLog,
          chatNum: zanLog.length
        }
      }

      return ;
    }

    @Post()
    async create(@Res() res, @Body() commentInfo: CommentEntity) {
        let result = await this.commentService.getAllComment();
        let comm = {
            id: result.length + 1,
            user_id: 7,
            face: commentInfo.face,
            nickname: commentInfo.nickname,
            words: commentInfo.words,
            time: new DateUtils().showTime()
          }
          await this.commentService.create(comm);
          result.push(comm)
         res.status(HttpStatus.CREATED).send(result);
    }
}