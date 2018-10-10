import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";

@Controller('bless')
export class BlessController {
    constructor(private readonly invitationService: BlessService){}
    @Get()
    async getInvitation ():Promise<BlessEntity[]> {
        return this.invitationService.getAllBless();
    }

    @Post()
    async create(@Res() res, @Body() user: BlessEntity) {
        await this.invitationService.create(user);
        res.status(HttpStatus.CREATED).send();
    }
}