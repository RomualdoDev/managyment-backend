import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Client {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients';
  clientCreated = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  createClient(client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client).pipe(
      tap(() => {
        this.clientCreated.emit();
      })
    );
  }

  getClientByCpf(cpf: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${cpf}`);
  }
}
