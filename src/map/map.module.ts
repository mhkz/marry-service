import {Module} from "@nestjs/common";
import { MapController } from './map.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [MapController]
})
export class MapModule { }