import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing-module';
import {NbChatModule} from '@nebular/theme';
import {RecommendationChatComponent} from './components/recommendation-chat/recommendation-chat.component';


@NgModule({
  declarations: [HomePage, RecommendationChatComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbChatModule
  ]
})
export class MainModule {
}
