import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing-module';
import {ChatComponent} from './components/chat/chat.component';


@NgModule({
  declarations: [HomePage, ChatComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class MainModule {
}
