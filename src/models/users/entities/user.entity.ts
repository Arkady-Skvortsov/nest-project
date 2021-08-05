import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// @Table({ tableName: 'users' })
// export class UserModel extends Model<UserModel, UserInterface> {
//   @Column({ type: DataType.STRING, unique: true, allowNull: false })
//   username: string;

//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//     primaryKey: true,
//   })
//   login: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   password: string;
// }

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Column({ type: 'string', nullable: false })
  login: string;

  @Column({ type: 'string', nullable: false })
  username: string;

  @Column({ type: 'string', nullable: false })
  password: string;
}
