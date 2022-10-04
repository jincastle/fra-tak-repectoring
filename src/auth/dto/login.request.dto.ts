import { PickType } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto extends PickType(User, ['email'] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string;
}
