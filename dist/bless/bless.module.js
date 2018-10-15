"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bless_service_1 = require("./bless.service");
const bless_controller_1 = require("./bless.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bless_entity_1 = require("./bless.entity");
const photo_service_1 = require("../photo/photo.service");
let BlessModule = class BlessModule {
};
BlessModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([bless_entity_1.BlessEntity])],
        providers: [bless_service_1.BlessService, photo_service_1.PhotoService],
        controllers: [bless_controller_1.BlessController]
    })
], BlessModule);
exports.BlessModule = BlessModule;
//# sourceMappingURL=bless.module.js.map