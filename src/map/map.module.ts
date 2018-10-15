import {Module} from "@nestjs/common";
import { MapController } from './map.controller';
import { InvitationService } from '../invitation/invitation.service';

@Module({
  imports: [],
  providers: [InvitationService],
  controllers: [MapController]
})
export class MapModule { }