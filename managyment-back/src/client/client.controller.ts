import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDTO } from './dtos/client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async postClient(@Body() body: ClientDTO) {
    return await this.clientService.postClient(body);
  }

  @Get(':cpf')
  async getClient(@Param('cpf') cpf: string) {
    return await this.clientService.getClient(cpf);
  }

  @Get()
  async getClients() {
    return await this.clientService.getAllClients();
  }
}
