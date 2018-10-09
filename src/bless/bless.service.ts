import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BlessEntity } from './bless.entity'
import { Repository } from "typeorm";

@Injectable()
export class BlessService{
    constructor(@InjectRepository(BlessEntity)
                private readonly blessEntityRepository: Repository<BlessEntity>){}
    /**
     * 根据 appId 来查询 邀请信息
     */
    async getAllBless(): Promise<BlessEntity[]> {
        return this.blessEntityRepository.find({})
    }

    /**
     * 插入微信用户消息
     */
    async create(user: BlessEntity): Promise<[string]> {
        let insertUserInfo = new BlessEntity()
        insertUserInfo = user;
        return this.blessEntityRepository.save(insertUserInfo)
            .then(res => {
                return 'create employee ...done'
            })
            .catch(err => {
                console.log("error", err)
                return err
            });
    }
}