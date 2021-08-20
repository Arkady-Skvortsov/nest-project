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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = exports.Role = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose = require("mongoose");
const user_schema_1 = require("../../users/schemas/user.schema");
let Role = class Role {
};
__decorate([
    swagger_1.ApiProperty({
        example: 'Admin',
        description: 'A title of the (current) role',
    }),
    mongoose_1.Prop({
        type: mongoose.Schema.Types.String,
        required: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Role.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'You can ban the users and will give the benefits',
        description: 'A description of the (current) role',
    }),
    mongoose_1.Prop({
        type: mongoose.Schema.Types.String,
        required: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'SlamDunk, Docker-Cocker',
        description: 'Many to Many from User to Role into MongoDB',
    }),
    mongoose_1.Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'User' }],
        required: true,
    }),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = __decorate([
    mongoose_1.Schema()
], Role);
exports.Role = Role;
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(Role);
//# sourceMappingURL=role.schema.js.map