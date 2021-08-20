import { CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ExecutionContext } from '@nestjs/common';
export default class UsersAuthGuard implements CanActivate {
    constructor();
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
