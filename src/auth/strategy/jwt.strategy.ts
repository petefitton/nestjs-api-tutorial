import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    const temp = config.get<string>('JWT_SECRET');
    let secOrKey: string | Buffer<ArrayBufferLike>;
    if (temp === undefined) {
      secOrKey = '';
    } else {
      secOrKey = temp;
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secOrKey,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user =
      await this.prisma.user.findUnique({
        where: {
          id: payload.sub,
        },
      });
    // delete user.hash;
    return user;
  }
}