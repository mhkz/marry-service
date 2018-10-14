import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";

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
    async create(@Res() res, @Body() user: CommentEntity) {
        var result = {
          id: '',
          userId: 7,
          nickname: user.nickname,
          face: user.face,
          words: user.words,
          time: new Date().getTime()
        }
        await this.commentService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}