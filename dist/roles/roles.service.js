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
exports.RolesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const role_schema_1 = require("./schemas/role.schema");
let RolesService = class RolesService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    async get_all_roles() {
        try {
            const all_roles = await this.roleModel.find();
            return all_roles;
        }
        catch (e) {
            throw e;
        }
    }
    async get_correct_role(id) {
        try {
            const correct_role = await this.roleModel.findById(id);
            return correct_role;
        }
        catch (e) {
            throw e;
        }
    }
    async get_role_by_title(title) {
        try {
            const current_role = await this.roleModel.findOne({
                where: { title: title },
                include: { all: true },
            });
            return current_role;
        }
        catch (e) {
            throw e;
        }
    }
    async create_new_role(roleDTO) {
        try {
            const new_role = await this.roleModel.create(roleDTO);
            return new_role;
        }
        catch (e) {
            throw e;
        }
    }
    async delete_role(id) {
        try {
            await this.roleModel.findByIdAndDelete(id);
        }
        catch (e) {
            throw e;
        }
    }
    async update_role(id, roleDTO) {
        try {
            const updated = await this.roleModel.findByIdAndUpdate(id, Object.assign({}, roleDTO));
            return updated;
        }
        catch (e) {
            throw e;
        }
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map