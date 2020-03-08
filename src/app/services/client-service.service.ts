import { Client } from './../Modules/client/client.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private url = 'http://localhost:3000/client';
  constructor(private http: HttpClient) { }
  private client: Client ={
    id : null,
    nom: '',
    prenom: '',
    status: '',
    photo: '',
    telC: null,
    emailC: '',
    adresseC: '',
    villeC: '',
};
getClients() {
  return this.http.get<Client[]>(this.url);
}
insertClient(client) {
  console.log(client);
  return this.http.post(this.url, client);
}Clinet
updateClient(client: Client) {
  return this.http.put(`${this.url}/${client.id}`, client);
}
deleteClient(key) {
  return this.http.delete(`${this.url}/${key}`);

}
getter() {
  return this.client
}
setter(c: Client) {
  this.client = c;
}

}
