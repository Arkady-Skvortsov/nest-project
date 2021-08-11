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
const user_schema_1 = require("./schemas/user.schema");
const role_schema_1 = require("../roles/schemas/role.schema");
const role_create_dto_1 = require("../roles/dto/role-create.dto");
let UsersService = class UsersService {
    constructor(userModel, roleModel) {
        this.userModel = userModel;
        this.roleModel = roleModel;
    }
    async get_all() {
        const all_users = await this.userModel.find();
        return all_users;
    }
    async create_user(userDTO) {
        const create_user = await this.userModel.create(userDTO);
        return create_user;
    }
    async get_current_user(id) {
        const current_user = await this.userModel.findById(id);
        return current_user;
    }
    async update_user(id, userDTO) {
        const update_user = await this.userModel.findByIdAndUpdate(id, userDTO);
        await update_user.save();
        return update_user;
    }
    async delete_user(id) {
        const delete_user = await this.userModel.findByIdAndDelete(id);
        return delete_user._id;
    }
    async add_role(id, userDTO, roleDTO) {
        const user = await this.userModel.findById(id);
        await user.updateOne(userDTO);
        await user.save();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __param(1, mongoose_2.InjectModel(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map