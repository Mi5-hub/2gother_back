import { Body, Controller, Post, UseGuards,Request, Get, HttpCode, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { response, userDetails } from 'src/utills/interfaces';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
    constructor(private service: UsersService) { }

    @Post("login")
    @ApiTags('user')
    @ApiBody({
        schema: {
        example: {
            "email": "ts@gmail.com",
            "password": "123456"
        },
        },
    })
    @HttpCode(200)
    async login(@Body() user: { email: string; password: string; }):Promise<response> {
        return await this.service.login(user);
    }
    
    @Post("signup")
    @ApiTags('user')
    @ApiBody({
        schema: {
        example: {
            "name": "Ts Ran",
            "email": "ts@gmail.com",
            "password": "123456"
        },
        },
    })
    @HttpCode(200)
    async signup(@Body() user: userDetails):Promise<response> {
        return await this.service.signUp(user);
    }

    @Get("cart/:userId")
    // @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    @ApiBearerAuth("JWT-auth")
    async getUserCart(@Param("userId")userId:string):Promise<response> {
        return await this.service.getUserCart(userId);
    }
    @ApiBearerAuth()
    @Get("wishList")
    @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    async getUserWishList(@Request() req:any):Promise<response> {
        return await this.service.getUserWishList(req.user.userId);
    }

    @Post("updateCart/:userId")
    // @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    // @ApiBearerAuth()
    @ApiBody({
        schema: {
            example: [
                {
                    "productId": "25712c05-0c46-41a9-bd07-92fc44d665fe",
                    "count": 2
                }
        ]
        
        }
    })
    async updateUserCart(@Param('userId') userId:string, @Request() req:any,@Body() cartItems:{productId:string,count: number}[]): Promise<response> {
        return await this.service.updateCart(userId,cartItems)
    }

    @Post("updateWishList")
    @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiBody({
        schema: {
            example: [
                {
                    "productId": "25712c05-0c46-41a9-bd07-92fc44d665fe"
                }
        ]
        
        }
    })
    async updateWishList(@Request() req:any,@Body() wishListItems:{productId:string}[]): Promise<response> {
        return await this.service.updateWishList(req.user.userId,wishListItems)
    }

    @Post("addToCart")
    @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiBody({
        schema: {
            example:
                {
                    "productId": "25712c05-0c46-41a9-bd07-92fc44d665fe"
                }
        }
    })
    async addToCart(@Request() req:any,@Body() wishListItem:{productId:string}): Promise<response> {
        return await this.service.addToCart(req.user.userId,wishListItem)
    }


    @Post("addToWishList")
    @UseGuards(JwtAuthGuard)
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiBody({
        schema: {
            example:
                {
                    "productId": "25712c05-0c46-41a9-bd07-92fc44d665fe"
                }
        }
    })
    async addToWishList(@Request() req:any,@Body() wishListItem:{productId:string}): Promise<response> {
        return await this.service.addToWishList(req.user.userId,wishListItem)
    }

}

