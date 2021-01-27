import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing-module';
import {NbChatModule} from '@nebular/theme';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbChatModule
  ]
})
export class MainModule {
}
