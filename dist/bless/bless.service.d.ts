import { BlessEntity } from './bless.entity';
import { Repository } from "typeorm";
export declare class BlessService {
    private readonly blessEntityRepository;
    constructor(blessEntityRepository: Repository<BlessEntity>);
    getAllBless(): Promise<BlessEntity[]>;
    create(user: BlessEntity): Promise<[string]>;
}
