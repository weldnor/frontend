import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing-module';
import {ChatModule} from '../../features/chat/chat.module';


@NgModule({
  declarations: [HomePage],
  exports: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChatModule,
  ]
})
export class MainModule {
}
