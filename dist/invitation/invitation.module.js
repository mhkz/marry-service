"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const invitation_controller_1 = require("./invitation.controller");
const invitation_service_1 = require("./invitation.service");
const typeorm_1 = require("@nestjs/typeorm");
const invitation_entity_1 = require("./invitation.entity");
const bless_entity_1 = require("../bless/bless.entity");
const bless_service_1 = require("../bless/bless.service");
const comment_service_1 = require("../comment/comment.service");
const comment_entity_1 = require("../comment/comment.entity");
let InvitationModule = class InvitationModule {
};
InvitationModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([invitation_entity_1.InvitationEntity, bless_entity_1.BlessEntity, comment_entity_1.CommentEntity])],
        controllers: [invitation_controller_1.InvitationController],
        providers: [invitation_service_1.InvitationService, bless_service_1.BlessService, comment_service_1.CommentService]
    })
], InvitationModule);
exports.InvitationModule = InvitationModule;
//# sourceMappingURL=invitation.module.js.map