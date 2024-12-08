import { BadRequestException, Injectable } from '@nestjs/common';
import { ClientDTO } from './dtos/client.dto';
import { PrismaService } from 'src/prisma.service';
import { Client } from '@prisma/client';
@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService) {}

  async getClient(cpf: string): Promise<ClientDTO> {
    const user = await this.prisma.client.findUnique({ where: { cpf } });
    return user;
  }

  async getAllClients(): Promise<Array<ClientDTO>> {
    const users = await this.prisma.client.findMany();
    return users;
  }

  async postClient(body: ClientDTO): Promise<Client> {
    const { cpf, age, beginDate, email, name, phoneNumber, size } = body;

    const alreadyOnDB = await this.getClient(cpf);
    if (!alreadyOnDB) {
      return await this.prisma.client.create({
        data: {
          cpf,
          age,
          name,
          beginDate,
          email,
          phoneNumber,
          size,
        },
      });
    } else {
      throw new BadRequestException();
    }
  }
}
