import { IsDate, IsEmail, IsInt, IsString } from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';

export class ClientDTO {
  @IsCPF()
  readonly cpf: string;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsInt()
  readonly size: number;

  @IsInt()
  readonly phoneNumber: string;

  @IsEmail()
  readonly email: string;

  @IsDate()
  readonly beginDate: number;
}
