import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobpostComponent} from './components/jobs/jobpost/jobpost.component';
import { PengembanganComponent } from './components/pengembangan/pengembangan.component'
import {PemanfaatanComponent} from './components/pemanfaatan/pemanfaatan.component';
import {PengajuanComponent} from './components/pengajuan/pengajuan.component';
import {LoginComponent} from './components/login/login.component';
import {AdminprofileComponent} from './components/adminprofile/adminprofile.component';
import {UseradministratorComponent} from './components/useradministrator/useradministrator.component';
import {UtilitiessettingsComponent} from './components/utilitiessettings/utilitiessettings.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home', component: JobpostComponent,canActivate:[AuthGuard]},
  {path:'pengembangan', component: PengembanganComponent,canActivate:[AuthGuard]},
  {path:'pemanfaatan', component: PemanfaatanComponent,canActivate:[AuthGuard]},
  {path:'pengajuan',component:PengajuanComponent,canActivate:[AuthGuard]},
  {path:'informasi',component:UseradministratorComponent,canActivate:[AuthGuard]},
  {path:'utilsettings',component:UtilitiessettingsComponent,canActivate:[AuthGuard]},
  {path:'adminprofile',component:AdminprofileComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
