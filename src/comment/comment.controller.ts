import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";

@Controller('comment')
export class CommentController {
    constructor(private readonly invitationService: CommentService){}
    @Get()
    async getInvitation ():Promise<CommentEntity[]> {
        return this.invitationService.getAllComment();
    }

    @Post()
    async create(@Res() res, @Body() user: CommentEntity) {
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}