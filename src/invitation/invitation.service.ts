import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InvitationEntity } from 'invitation/invitation.entity'
import { Repository } from "typeorm";

@Injectable()
export class InvitationService{
    constructor(@InjectRepository(InvitationEntity)
                private readonly invitationEntityRepository: Repository<InvitationEntity>){}
    /**
     * 根据 appId 来查询 邀请信息
     */
    async getAllUser(): Promise<InvitationEntity[]> {
        return this.invitationEntityRepository.find({})
    }

    /**
     * 插入小程序信息
     */
    async create(user: InvitationEntity): Promise<[string]> {

        let insertUserInfo = new InvitationEntity()
        insertUserInfo = user;
        return this.invitationEntityRepository.save(insertUserInfo)
            .then(res => {
                return 'create employee ...done'
            })
            .catch(err => {
                console.log("error", err)
                return err
            });
    }


}