import { ApiProperty } from "@nestjs/swagger";

export class ErrorDto {
    @ApiProperty()
    error:boolean;

    @ApiProperty()
    message:string
}