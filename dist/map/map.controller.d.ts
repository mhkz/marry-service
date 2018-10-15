import { InvitationService } from '../invitation/invitation.service';
export declare class MapController {
    private readonly invitationService;
    constructor(invitationService: InvitationService);
    getMapInfo(): Promise<{
        mainInfo: any;
    }>;
}
