import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Client, ClientService } from '../client.service';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cpf', 'email', 'phoneNumber', 'age', 'actions'];
  dataSource: Client[] = [];
  selectedClient: Client | null = null;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
    this.clientService.clientCreated.subscribe(() => {
      this.loadClients();
    });
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(data => {
      this.dataSource = data;
    });
  }

  showClientDetails(cpf: string): void {
    this.clientService.getClientByCpf(cpf).subscribe(data => {
      this.selectedClient = data;
    });
  }

  closePopup(): void {
    this.selectedClient = null;
  }
}
