import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getComment(req: any): Promise<{
        chatList: CommentEntity[];
        chatNum: number;
        title: string;
        thumb: string;
    }>;
    create(res: any, commentInfo: CommentEntity): Promise<void>;
}
