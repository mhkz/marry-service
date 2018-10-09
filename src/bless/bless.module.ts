import {Module} from "@nestjs/common";
import {BlessService} from "./bless.service";
import {BlessController} from "./bless.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BlessEntity} from "./bless.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BlessEntity])],
    providers: [BlessService],
    controllers: [BlessController]
})
export class BlessModule { }