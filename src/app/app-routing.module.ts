import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfilepageComponent} from './components/profilepage/profilepage.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {SettingspageComponent} from "./components/admin/settingspage/settingspage.component";

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'profile', component: ProfilepageComponent},
  {path: 'admin/settings', component: SettingspageComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
