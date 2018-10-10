import { CommentEntity } from "./comment.entity";
import { CommentService } from "./comment.service";
export declare class CommentController {
    private readonly invitationService;
    constructor(invitationService: CommentService);
    getInvitation(): Promise<CommentEntity[]>;
    create(res: any, user: CommentEntity): Promise<void>;
}
