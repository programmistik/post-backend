"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostapiModule = void 0;
const common_1 = require("@nestjs/common");
const postapi_service_1 = require("./postapi.service");
const postapi_controller_1 = require("./postapi.controller");
const mongoose_1 = require("@nestjs/mongoose");
const postapi_schema_1 = require("./schemas/postapi.schema");
let PostapiModule = class PostapiModule {
};
PostapiModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Post', schema: postapi_schema_1.PostapiSchema }])
        ],
        providers: [postapi_service_1.PostapiService],
        controllers: [postapi_controller_1.PostapiController]
    })
], PostapiModule);
exports.PostapiModule = PostapiModule;
//# sourceMappingURL=postapi.module.js.map