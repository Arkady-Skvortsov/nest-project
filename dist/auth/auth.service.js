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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(userDTO) {
        const user = await this.verify_token(userDTO);
        return this.generate_token(user);
    }
    async registration(userDTO) {
        const user = await this.userService.get_user_by_username(userDTO.username);
        if (user)
            throw new common_1.HttpException('Такой пользователь уже зарегистрирован', common_1.HttpStatus.BAD_REQUEST);
        const hash_password = await bcrypt.hashSync(userDTO.password, 5);
        const new_user = await this.userService.create_user(Object.assign(Object.assign({}, userDTO), { password: hash_password }));
        await this.generate_token(new_user);
    }
    async generate_token(userDTO) {
        const ready_token = {
            username: userDTO.username,
            login: userDTO.login,
        };
        return {
            token: this.jwtService.sign(ready_token),
        };
    }
    async verify_token(userDTO) {
        const user = await this.userService.get_user_by_username(userDTO.username);
        const password_eq = await bcrypt.compare(userDTO.password, user.password);
        if (!user && !password_eq) {
            throw new common_1.UnauthorizedException({
                message: 'Неверный username или пароль',
            });
        }
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map