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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bless_entity_1 = require("./bless.entity");
const bless_service_1 = require("./bless.service");
const dateUtils_1 = require("../utils/dateUtils");
let BlessController = class BlessController {
    constructor(blessService) {
        this.blessService = blessService;
    }
    getInvitation() {
        return __awaiter(this, void 0, void 0, function* () {
            var zanLogList = yield this.blessService.getAllBless();
            return {
                zanLog: zanLogList,
                zanNum: zanLogList.length,
            };
        });
    }
    create(res, blessInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.blessService.getAllBless();
            let zanInfo = {
                id: result.length + 1,
                user_id: 7,
                openid: 'null',
                face: blessInfo.face,
                nickname: blessInfo.nickname,
                time: new dateUtils_1.DateUtils().showTime()
            };
            yield this.blessService.create(zanInfo);
            result.push(zanInfo);
            res.status(common_1.HttpStatus.CREATED).send({
                zanLog: result,
                zanNum: result.length,
                msg: '已经收到您的祝福哟～'
            });
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlessController.prototype, "getInvitation", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bless_entity_1.BlessEntity]),
    __metadata("design:returntype", Promise)
], BlessController.prototype, "create", null);
BlessController = __decorate([
    common_1.Controller('bless'),
    __metadata("design:paramtypes", [bless_service_1.BlessService])
], BlessController);
exports.BlessController = BlessController;
//# sourceMappingURL=bless.controller.js.map