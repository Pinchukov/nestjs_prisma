import { 
    IsNotEmpty, IsString, MinLength, 
    //MaxLength, //IsBoolean, //IsOptional,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;
}


