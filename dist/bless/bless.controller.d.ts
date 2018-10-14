import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";
export declare class BlessController {
    private readonly blessService;
    constructor(blessService: BlessService);
    getInvitation(): Promise<{
        zanLog: BlessEntity[];
        zanNum: number;
    }>;
    create(res: any, blessInfo: BlessEntity): Promise<void>;
}
