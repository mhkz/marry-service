import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { InvitationEntity } from "./invitation.entity";
import { InvitationService } from "./invitation.service";

@Controller('invitation')
export class InvitationController {
    constructor(private readonly invitationService: InvitationService){}
    @Get()
    async getInvitation ():Promise<InvitationEntity[]> {
        return this.invitationService.getAllUser();
    }

    @Post()
    async create(@Res() res, @Body() user: InvitationEntity) {
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}