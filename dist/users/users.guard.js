"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class UsersAuthGuard {
    constructor() { }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Пользователь не авторизован');
        }
    }
}
exports.default = UsersAuthGuard;
//# sourceMappingURL=users.guard.js.map