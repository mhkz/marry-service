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
const comment_entity_1 = require("./comment.entity");
const comment_service_1 = require("./comment.service");
const dateUtils_1 = require("../utils/dateUtils");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    getComment(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var queryInfo = req.query;
            if (queryInfo.c == 'info') {
                var zanLog = yield this.commentService.getAllComment();
                return {
                    chatList: zanLog,
                    chatNum: zanLog.length
                };
            }
            return;
        });
    }
    create(res, commentInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.commentService.getAllComment();
            let comm = {
                id: result.length + 1,
                user_id: 7,
                face: commentInfo.face,
                nickname: commentInfo.nickname,
                words: commentInfo.words,
                time: new dateUtils_1.DateUtils().showTime()
            };
            yield this.commentService.create(comm);
            result.push(comm);
            res.status(common_1.HttpStatus.CREATED).send(result);
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComment", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, comment_entity_1.CommentEntity]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
CommentController = __decorate([
    common_1.Controller('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map