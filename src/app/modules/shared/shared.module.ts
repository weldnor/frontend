import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbChatModule} from '@nebular/theme';
import {RecommendationChatComponent} from './components/recommendation-chat/recommendation-chat.component';


@NgModule({
  declarations: [RecommendationChatComponent],
  exports: [
    RecommendationChatComponent,
  ],
  imports: [
    CommonModule,
    NbChatModule,
  ]
})
export class SharedModule {
}
