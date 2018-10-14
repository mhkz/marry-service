import { CommentEntity } from './comment.entity';
import { Repository } from "typeorm";
export declare class CommentService {
    private readonly commentEntityRepository;
    constructor(commentEntityRepository: Repository<CommentEntity>);
    getAllComment(): Promise<CommentEntity[]>;
    create(user: CommentEntity): Promise<any>;
}
