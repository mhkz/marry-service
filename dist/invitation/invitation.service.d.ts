import { InvitationEntity } from './invitation.entity';
import { Repository } from "typeorm";
export declare class InvitationService {
    private readonly invitationEntityRepository;
    constructor(invitationEntityRepository: Repository<InvitationEntity>);
    getAllUser(): Promise<InvitationEntity[]>;
    create(user: InvitationEntity): Promise<[string]>;
}
