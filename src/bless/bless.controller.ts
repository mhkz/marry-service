import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";
import { DateUtils } from '../utils/dateUtils';

@Controller('bless')
export class BlessController {
    constructor(private readonly blessService: BlessService){}
    @Get()
    async getInvitation () {
      var zanLogList = await this.blessService.getAllBless();
      return {
        zanLog: zanLogList,
        zanNum: zanLogList.length,
      }
    }

    @Post()
    async create(@Res() res, @Body() blessInfo: BlessEntity) {
      let result = await this.blessService.getAllBless();
      let zanInfo = {
            id: result.length + 1,
            user_id: 7,
            openid: 'null',
            face: blessInfo.face,
            nickname: blessInfo.nickname,
            time: new DateUtils().showTime()
          }
      await this.blessService.create(zanInfo);
      result.push(zanInfo)
      res.status(HttpStatus.CREATED).send({
        chatList: result,
        chatNum: result.length,
        msg: '已经收到您的祝福哟～'
      });
    }
}