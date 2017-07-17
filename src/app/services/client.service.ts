import { Injectable } from '@angular/core';
import { Client } from '../models/Client';

//angularfire
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {Observable } from 'rxjs';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af:AngularFireDatabase) 
  {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>; //as created in firebase "clients"
  }

  getClients() {
    return this.clients;
  }
}
