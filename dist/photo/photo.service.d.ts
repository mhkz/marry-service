import { PhotoEntity } from './photo.entity';
import { Repository } from "typeorm";
export declare class PhotoService {
    private readonly blessEntityRepository;
    constructor(blessEntityRepository: Repository<PhotoEntity>);
    getAllPhoto(): Promise<PhotoEntity[]>;
}
