import {Controller, Get, Res} from "@nestjs/common";
import {BlessService} from "./bless.service";

@Controller('bless')
export class BlessController{
    constructor(private readonly blessService: BlessService){}
    @Get()
    getAll(@Res() res) {
        res.json(this.blessService.getAllBless())
    }
}