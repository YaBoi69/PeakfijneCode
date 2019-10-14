import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {ProfilepageComponent} from './components/profilepage/profilepage.component';
import { SettingspageComponent } from './components/admin/settingspage/settingspage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProfilepageComponent,
    SettingspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
