import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routiong-module';
import {HttpClientModule} from '@angular/common/http';
import {NbIconModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {MainModule} from './routed/main/main.module';
import {RecommendationChatModule} from './features/recommendation-chat/recommendation-chat.module';
import {CoreModule} from './features/core/core.module';

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
    NbIconModule,
    NbEvaIconsModule,
    MainModule,
    RecommendationChatModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
