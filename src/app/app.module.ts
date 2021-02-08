import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routiong-module';
import {HttpClientModule} from '@angular/common/http';
import {NbIconModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {MainModule} from './modules/main/main.module';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    MainModule,
    SharedModule,
    NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
