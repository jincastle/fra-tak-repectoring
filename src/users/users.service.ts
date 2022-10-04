import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { UserRequestDto } from './dto/users.request.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signUp(body: UserRequestDto) {
    const { email, name, password } = body;
    const isUserExist = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log(isUserExist);
    if (isUserExist) {
      throw new UnauthorizedException('이미 가입한 이메일 입니다');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.save({
      email,
      name,
      password: hashedPassword,
    });

    return user;
  }
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    return result ? true : false;
  }
  async findCatByIdWithoutPassword(userId: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id: userId });
    return user;
  }
}
