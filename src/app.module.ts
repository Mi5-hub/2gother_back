import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', // or any other supported database type
    host: process.env.HOST_MYSQL || "localhost",
    port:  3307,
    username: process.env.PORT_MYSQL || 'root',
    password: process.env.PWD || 'root',
    database: process.env.DATABASE || 'togother',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // your entities
    synchronize: true, // Auto-create database tables (not suitable for production),
    "logging": true
  }), UserModule, ProductModule, CartModule,AuthModule],
  controllers: [CartController],
  providers: [CartService],
})
export class AppModule {}
