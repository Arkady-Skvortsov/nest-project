import { AppService } from './app.service';
export declare class AppController {
    private AppService;
    constructor(AppService: AppService);
    get_user(): {
        name: string;
        password: string;
        role: string[];
    }[];
}
