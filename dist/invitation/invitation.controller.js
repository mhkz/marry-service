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
const invitation_entity_1 = require("./invitation.entity");
const invitation_service_1 = require("./invitation.service");
const bless_service_1 = require("../bless/bless.service");
const comment_service_1 = require("../comment/comment.service");
let InvitationController = class InvitationController {
    constructor(invitationService, blessService, commentService) {
        this.invitationService = invitationService;
        this.blessService = blessService;
        this.commentService = commentService;
    }
    getInvitation() {
        return __awaiter(this, void 0, void 0, function* () {
            let wxInfo = {
                mainInfo: {},
                zanLog: [],
                zanNum: 0,
                slideList: [],
                music_url: '',
                chatList: [],
                chatNum: 0
            };
            var indexInfo = yield this.invitationService.getAllUser();
            var bless = yield this.blessService.getAllBless();
            var comment = yield this.commentService.getAllComment();
            wxInfo.mainInfo = indexInfo[0];
            wxInfo.zanLog = bless;
            wxInfo.zanNum = bless.length;
            wxInfo.slideList = [];
            wxInfo.music_url = '';
            wxInfo.chatList = comment;
            wxInfo.chatNum = comment.length;
            return wxInfo;
        });
    }
    create(res, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.invitationService.create(user);
            res.status(common_1.HttpStatus.CREATED).send();
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "getInvitation", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, invitation_entity_1.InvitationEntity]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "create", null);
InvitationController = __decorate([
    common_1.Controller('invitation'),
    __metadata("design:paramtypes", [invitation_service_1.InvitationService,
        bless_service_1.BlessService,
        comment_service_1.CommentService])
], InvitationController);
exports.InvitationController = InvitationController;
//# sourceMappingURL=invitation.controller.js.map