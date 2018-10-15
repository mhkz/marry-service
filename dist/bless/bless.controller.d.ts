import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";
import { PhotoService } from '../photo/photo.service';
export declare class BlessController {
    private readonly blessService;
    private readonly photoService;
    constructor(blessService: BlessService, photoService: PhotoService);
    getInvitation(): Promise<{
        zanLog: BlessEntity[];
        zanNum: number;
        slideList: import("../photo/photo.entity").PhotoEntity[];
        title: string;
        thumb: string;
    }>;
    create(res: any, blessInfo: BlessEntity): Promise<void>;
}
