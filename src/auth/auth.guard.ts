import { ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { CanActivate, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const bearer_part = req.headers.authorization.split(' ')[0];
      const token_part = req.headers.authorization.split(' ')[1];

      if (bearer_part !== 'Bearer' && !token_part) {
        throw new UnauthorizedException('Пользователь не авторизован');
      }

      const user = this.jwtService.verify(token_part);

      req.user = user;

      return true;
    } catch (e) {
      throw new UnauthorizedException('Пользователь не авторизован');
    }
  }
}
