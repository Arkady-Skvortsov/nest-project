import { CanActivate } from '@nestjs/common';
import { AuthService } from './auth.service';

export class AuthGuard {
  constructor(private authService: AuthService) {}

  // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
  //   return true;
  // }
}
