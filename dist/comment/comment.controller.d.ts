import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";
export declare class CommentController {
    private readonly invitationService;
    constructor(invitationService: CommentService);
    getComment(req: any): Promise<string>;
    create(res: any, user: CommentEntity): Promise<void>;
}
