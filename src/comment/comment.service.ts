import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity } from './comment.entity'
import { Repository } from "typeorm";

@Injectable()
export class CommentService{
    constructor(@InjectRepository(CommentEntity)
                private readonly commentEntityRepository: Repository<CommentEntity>){}
    /**
     * 根据 appId 来查询 邀请信息
     */
    async getAllComment(): Promise<CommentEntity[]> {
        return this.commentEntityRepository.find({})
    }

    /**
     * 插入微信用户消息
     */
    async create(user: CommentEntity): Promise<[string]> {
        let insertUserInfo = new CommentEntity()
        insertUserInfo = user;
        return this.commentEntityRepository.save(insertUserInfo)
            .then(res => {
                return '成功插入微信消息'
            })
            .catch(err => {
                console.log("error", err)
                return err
            });
    }
}