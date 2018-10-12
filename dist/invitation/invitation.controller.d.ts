import { InvitationEntity } from "./invitation.entity";
import { InvitationService } from "./invitation.service";
import { BlessService } from '../bless/bless.service';
import { CommentService } from '../comment/comment.service';
export declare class InvitationController {
    private readonly invitationService;
    private readonly blessService;
    private readonly commentService;
    constructor(invitationService: InvitationService, blessService: BlessService, commentService: CommentService);
    getInvitation(req: any): Promise<{
        mainInfo: {};
        zanLog: any[];
        zanNum: number;
        slideList: any[];
        music_url: string;
        chatList: any[];
        chatNum: number;
    }>;
    create(res: any, user: InvitationEntity): Promise<void>;
}
