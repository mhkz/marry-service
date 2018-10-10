import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";
export declare class BlessController {
    private readonly invitationService;
    constructor(invitationService: BlessService);
    getInvitation(): Promise<BlessEntity[]>;
    create(res: any, user: BlessEntity): Promise<void>;
}
