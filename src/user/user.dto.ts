import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  
    @ApiProperty()
    firstName: string;
  
    @ApiProperty()
    lastName: string;

    @ApiProperty()
    mail: string;

    @ApiProperty()
    password: string;

    @ApiProperty({default:false})
    isAdmin: boolean;
}
export class UserLoginDto {
    @ApiProperty({required:true})
    mail:string;

    @ApiProperty({required:true})
    password:string;
}