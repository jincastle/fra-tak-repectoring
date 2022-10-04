import { PickType } from '@nestjs/swagger';
import { User } from '../users.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserRequestDto extends PickType(User, [
  'email',
  'name',
  'address',
] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string;
}
