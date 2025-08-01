import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientTableComponent } from './client-table/client-table.component';
import { ClientService, Client } from './client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientTableComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'managyment-front';
  showCreateForm = false;
  newClient: Omit<Client, 'id' | 'createdAt' | 'updatedAt'> = {
    name: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    age: 0
  };

  constructor(private clientService: ClientService) {}

  onCreateClient(): void {
    const clientData = { ...this.newClient, age: +this.newClient.age };
    this.clientService.createClient(clientData).subscribe(() => {
      this.showCreateForm = false;
      // Atualizar a tabela de clientes
    });
  }
}
