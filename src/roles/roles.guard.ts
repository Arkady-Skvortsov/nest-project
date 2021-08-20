import { CanActivate, Injectable } from '@nestjs/common';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';

@Injectable()
export default class RolesAuthGuard implements CanActivate {
  constructor(private rolesService: RolesService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      return true;
    } catch (e) {
      throw new UnauthorizedException('Пользователь с такой ролью не может...');
    }
  }
}
