import {Module} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentEntity} from "./comment.entity";
import {CommentController} from "./comment.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity])],
    providers: [CommentService],
    controllers: [CommentController]
})
export class CommentModule { }