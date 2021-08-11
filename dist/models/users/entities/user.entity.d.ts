import { Model } from 'sequelize';
import { UserInterface } from '../interfaces/user.interface';
export declare class UserModel extends Model<UserModel, UserInterface> {
    username: string;
    login: string;
    password: string;
}
