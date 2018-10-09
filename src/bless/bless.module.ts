import {Module} from "@nestjs/common";
import {BlessService} from "./bless.service";
import {BlessController} from "./bless.controller";

@Module({
    imports: [],
    providers: [BlessService],
    controllers: [BlessController]
})
export class BlessModule { }