import {Controller, Get} from "@nestjs/common";
import { PhotoService } from "./photo.service";

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService){}
  @Get()
  async getInvitation () {
      return {
        slideList: await this.photoService.getAllPhoto(),
        title: '郭峰&李梦珠的小请柬',
        thumb: "https://marrylmz.oss-cn-beijing.aliyuncs.com/photo/IMG_20171105_110704_HDR.jpg"
      }
  }
}