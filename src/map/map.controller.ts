import {Controller, Get} from "@nestjs/common";

@Controller('map')
export class MapController {
  @Get()
  async getMapInfo () {
    return {
      lng: '32.10716069070984',
      lat: '114.11952316761017',
      title: '郭峰&李梦珠的小请柬',
      thumb: "https://marrylmz.oss-cn-beijing.aliyuncs.com/photo/IMG_20171105_110704_HDR.jpg"
    }
  }
}