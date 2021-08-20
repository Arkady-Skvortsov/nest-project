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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("./schemas/user.schema");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async get_all() {
        return this.usersService.get_all();
    }
    async get_current_user(username) {
        return this.usersService.get_user_by_username(username);
    }
    async create_user(dto) {
        return this.usersService.create_user(dto);
    }
    async update_user(id, dto) {
        return this.usersService.update_user(id, dto);
    }
    async set_role_to_user(id, dto) {
        return this.usersService.set_role_to_user(id, dto);
    }
    async delete_user(id) {
        return this.usersService.delete_user(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all users, which have' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.UseGuards(auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get_all", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get current user by id' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.UseGuards(auth_guard_1.JwtAuthGuard),
    common_1.Get(':username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get_current_user", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create the user' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create_user", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update the user by him (personal) id' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.Put('/update/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update_user", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Set new role to the user' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.Put('/set_role/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "set_role_to_user", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete the user by him (personal) id' }),
    swagger_1.ApiResponse({ status: 200, type: user_schema_1.User }),
    common_1.Delete('/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete_user", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map