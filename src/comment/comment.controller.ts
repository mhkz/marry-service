import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";

@Controller('comment')
export class CommentController {
    constructor(private readonly invitationService: CommentService){}
    @Get()
    async getComment (@Req() req) {
      return '';
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
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}