import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getComment(req: any): Promise<{
        chatList: CommentEntity[];
        chatNum: number;
    }>;
    create(res: any, user: CommentEntity): Promise<void>;
}
