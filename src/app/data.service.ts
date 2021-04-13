import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Client } from './client';
import {CLIENTS} from './fake-clients'


@Injectable({
  providedIn: 'root'
})





export class DataService {



  clients  ? : Client[] = CLIENTS; 

  constructor() { }

  getClients() : Observable<Client[]> {

    const clients = of(CLIENTS);   // requete vers le serveur pour recuperer les clients
    return clients;
  }

  addClient(client:Client){

    this.clients.push(client);
  }

  getclienttypes(): string[]{
    
    return ['simple', 'advanced']
  }
}

