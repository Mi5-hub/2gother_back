// 

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; // Assuming you have a custom JWT strategy

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Register Passport with JWT strategy
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtStrategy], // Register your custom JWT strategy
  exports: [PassportModule, JwtModule], // Export modules for use in other parts of the application
})
export class AuthModule {}
