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
    } | {
        zanLog: import("../bless/bless.entity").BlessEntity[];
        zanNum: number;
        msg: string;
        chatList?: undefined;
        chatNum?: undefined;
        content?: undefined;
    } | {
        chatList: import("../comment/comment.entity").CommentEntity[];
        chatNum: number;
        content: string;
        zanLog?: undefined;
        zanNum?: undefined;
        msg?: undefined;
    }>;
    create(res: any, user: InvitationEntity): Promise<void>;
}
