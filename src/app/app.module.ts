import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

//mhb added routing
import { RouterModule, Routes } from '@angular/router';

//AngularFire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


//Component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Service imports
import { ClientService } from './services/client.service';


//mhb added inital routes
const appRoutes: Routes = [
  { path: '', component:DashboardComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  { path: 'add-client', component:AddClientComponent},
  { path: 'client/:id',component:ClientDetailsComponent},
  { path: 'edit-client/:id',component:EditClientComponent}
  
];  

export const firebaseConfig = {
    apiKey: "AIzaSyCIyolr_rgq-4BRh0dlUnNEqVwiFEG-3Mc",
    authDomain: "clientpanel-d7e7f.firebaseapp.com",
    databaseURL: "https://clientpanel-d7e7f.firebaseio.com",
    storageBucket: "clientpanel-d7e7f.appspot.com",
    messagingSenderId: "934493554923"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig) ,
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
