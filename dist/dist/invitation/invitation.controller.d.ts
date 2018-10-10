import { InvitationEntity } from "./invitation.entity";
import { InvitationService } from "./invitation.service";
export declare class InvitationController {
    private readonly invitationService;
    constructor(invitationService: InvitationService);
    getInvitation(): Promise<InvitationEntity[]>;
    create(res: any, user: InvitationEntity): Promise<void>;
}
