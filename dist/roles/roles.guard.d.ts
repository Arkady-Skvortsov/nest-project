import { CanActivate } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';
export default class RolesAuthGuard implements CanActivate {
    private rolesService;
    constructor(rolesService: RolesService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
