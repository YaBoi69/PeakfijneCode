import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfilepageComponent} from './components/profilepage/profilepage.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'profile', component: ProfilepageComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
