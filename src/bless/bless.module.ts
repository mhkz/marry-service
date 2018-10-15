import {Module} from "@nestjs/common";
import {BlessService} from "./bless.service";
import {BlessController} from "./bless.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BlessEntity} from "./bless.entity";
import { PhotoService } from '../photo/photo.service';

@Module({
    imports: [TypeOrmModule.forFeature([BlessEntity])],
    providers: [BlessService, PhotoService],
    controllers: [BlessController]
})
export class BlessModule { }