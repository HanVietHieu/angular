import { Routes } from '@angular/router';
import { PATHS } from '../paths/paths';
import { MytelComponent } from './components/mytel/mytel.component';
import { AirtimeComponent } from './components/bitel/airtime/airtime.component';
import { SubastaComponent } from './components/bitel/subasta/subasta.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: PATHS.mytel, component: MytelComponent },
  { path: PATHS.bitelAirtime, component: AirtimeComponent },
  { path: PATHS.bitelSubasta, component: SubastaComponent },
  { path: PATHS.login, component: LoginComponent },
  { path: "", component: MytelComponent }
];
