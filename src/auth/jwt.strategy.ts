// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import {  Strategy } from 'passport-local';
// import { ExtractJwt } from 'passport-jwt';
// import { Timestamp } from 'typeorm';

// import { AuthService } from './auth.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.SECRET_KEY,
//       ignoreExpiration: false
//     });
//   }

//   async validate(payload: {userid: string,iat:number,exp:number}) {
//     return { userId: payload.userid };
//   }
// }

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Same secret key used in JwtModule configuration
    });
  }

  async validate(payload: any) {
    // Implement your validation logic here
    // Typically, you would validate the user based on the payload received in the JWT
    return { userId: payload.sub, username: payload.username }; // Example validation result
  }
}
