import { AuthService } from './auth.service';
import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { CanActivate } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
