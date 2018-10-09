"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let InvitationEntity = class InvitationEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InvitationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InvitationEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "app_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "he", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "she", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "he_tel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "she_tel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "lunar", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "music", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "hotel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "lat", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "lng", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "share", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "cover", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "thumb", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InvitationEntity.prototype, "code", void 0);
InvitationEntity = __decorate([
    typeorm_1.Entity()
], InvitationEntity);
exports.InvitationEntity = InvitationEntity;
//# sourceMappingURL=invitation.entity.js.map