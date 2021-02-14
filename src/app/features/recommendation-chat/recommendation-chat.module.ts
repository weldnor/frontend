import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendationChatComponent} from './components/recommendation-chat/recommendation-chat.component';
import {NbChatModule} from '@nebular/theme';


@NgModule({
  declarations: [RecommendationChatComponent],
  exports: [
    RecommendationChatComponent
  ],
  imports: [
    CommonModule,
    NbChatModule
  ]
})
export class RecommendationChatModule {
}
