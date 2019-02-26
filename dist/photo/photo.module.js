"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const photo_controller_1 = require("./photo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const photo_entity_1 = require("./photo.entity");
let PhotoModule = class PhotoModule {
};
PhotoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([photo_entity_1.PhotoEntity])],
        providers: [photo_service_1.PhotoService],
        controllers: [photo_controller_1.PhotoController]
    })
], PhotoModule);
exports.PhotoModule = PhotoModule;
//# sourceMappingURL=photo.module.js.map