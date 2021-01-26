import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing-module';
import {ChatComponent} from './components/chat/chat.component';
import {ChatMessageComponent} from './components/chat-message/chat-message.component';


@NgModule({
  declarations: [HomePage, ChatComponent, ChatMessageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class MainModule {
}
