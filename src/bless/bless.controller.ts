import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import { BlessEntity } from "./bless.entity";
import { BlessService } from "./bless.service";
import { DateUtils } from '../utils/dateUtils';
import { PhotoService } from '../photo/photo.service';

@Controller('bless')
export class BlessController {
    constructor(private readonly blessService: BlessService,
                private readonly photoService: PhotoService){}
    @Get()
    async getInvitation () {
      var zanLogList = await this.blessService.getAllBless();
      return {
        zanLog: zanLogList,
        zanNum: zanLogList.length,
        slideList: await this.photoService.getAllPhoto(),
        title: '我们结婚啦',
        thumb: "https://marrylmz.oss-cn-beijing.aliyuncs.com/photo/IMG_20171105_110704_HDR.jpg"
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
        zanLog: result,
        zanNum: result.length,
        msg: '已经收到您的祝福哟～',

        slideList: await this.photoService.getAllPhoto(),
        title: '我们结婚啦',
        thumb: "https://marrylmz.oss-cn-beijing.aliyuncs.com/photo/IMG_20171105_110704_HDR.jpg"
      });
    }
}