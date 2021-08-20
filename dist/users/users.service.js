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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const common_2 = require("@nestjs/common");
const user_schema_1 = require("./schemas/user.schema");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userModel, rolesService) {
        this.userModel = userModel;
        this.rolesService = rolesService;
    }
    async get_all() {
        try {
            const all_users = await this.userModel.find();
            return all_users;
        }
        catch (e) {
            throw e;
        }
    }
    async create_user(userDTO) {
        try {
            const create_user = await this.userModel.create(Object.assign({}, userDTO));
            const default_role = await this.rolesService.get_role_by_title('User');
            await create_user.$set('roles', [default_role]);
            return create_user;
        }
        catch (e) {
            throw e;
        }
    }
    async get_user_by_username(username) {
        try {
            const username_user = await this.userModel.findOne({
                where: { username: username },
                include: { all: true },
            });
            return username_user;
        }
        catch (e) {
            throw e;
        }
    }
    async update_user(id, userDTO) {
        try {
            const user = await this.userModel.findOneAndUpdate({ _id: id }, userDTO, {
                upsert: true,
                new: true,
            });
            return user;
        }
        catch (e) {
            throw new common_2.HttpException('Нельзя обновить пользователя с таким id', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async set_role_to_user(id, userDTO) {
        try {
            const user = await this.userModel.findById(id);
            return user;
        }
        catch (e) {
            throw new common_2.HttpException('Нельзя выдать роль этому пользователю', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async delete_user(id) {
        try {
            const delete_user = await this.userModel.findByIdAndDelete(id);
            return delete_user._id;
        }
        catch (e) {
            throw new common_2.HttpException('Нельзя удалить пользователя с таким Id', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map