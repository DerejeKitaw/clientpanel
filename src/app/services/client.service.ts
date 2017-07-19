import { Injectable } from '@angular/core';

//angularfire
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af:AngularFireDatabase) 
  {
    this.clients = this.af.list('/clients/clients') as FirebaseListObservable<Client[]>; //as created in firebase "clients"
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client) {
      this.clients.push(client);
  }
}
