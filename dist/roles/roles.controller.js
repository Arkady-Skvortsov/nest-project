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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const role_create_dto_1 = require("./dto/role-create.dto");
const swagger_1 = require("@nestjs/swagger");
const role_schema_1 = require("./schemas/role.schema");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async get_all_roles() {
        return this.rolesService.get_all_roles();
    }
    async get_correct_role(id) {
        return this.rolesService.get_correct_role(id);
    }
    async get_role_by_title(dto) {
        return this.rolesService.get_role_by_title(dto.title);
    }
    async create_new_role(roleDTO) {
        return this.rolesService.create_new_role(roleDTO);
    }
    async update_role(id, roleDTO) {
        return this.rolesService.update_role(id, roleDTO);
    }
    async delete_role(id) {
        return this.rolesService.delete_role(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all roles' }),
    swagger_1.ApiResponse({ status: 200, type: role_schema_1.Role }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "get_all_roles", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get current role by id' }),
    swagger_1.ApiResponse({ status: 200, type: role_schema_1.Role }),
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "get_correct_role", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Betta: Gave the role to current user?' }),
    swagger_1.ApiResponse({ status: 404, type: role_schema_1.Role }),
    common_1.Post('/get_role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_dto_1.RoleDTO]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "get_role_by_title", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create the role' }),
    swagger_1.ApiResponse({ status: 200, type: role_schema_1.Role }),
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_dto_1.RoleDTO]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create_new_role", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update the role by him (personal) id' }),
    swagger_1.ApiResponse({ status: 200, type: role_schema_1.Role }),
    common_1.Put('/update/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_create_dto_1.RoleDTO]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "update_role", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete the role by him (personal) id' }),
    swagger_1.ApiResponse({ status: 200, type: role_schema_1.Role }),
    common_1.Delete('/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "delete_role", null);
RolesController = __decorate([
    swagger_1.ApiTags('Roles'),
    common_1.Controller('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map