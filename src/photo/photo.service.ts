import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PhotoEntity } from './photo.entity'
import { Repository } from "typeorm";

@Injectable()
export class PhotoService{
  constructor(@InjectRepository(PhotoEntity)
              private readonly blessEntityRepository: Repository<PhotoEntity>){}
  /**
   * 根据 appId 来查询 邀请信息
   */
  async getAllPhoto(): Promise<PhotoEntity[]> {
    return this.blessEntityRepository.find({})
  }
}