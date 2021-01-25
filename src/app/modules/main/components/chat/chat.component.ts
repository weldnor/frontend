import {Component, OnInit} from '@angular/core';
import {ChatBotService} from '../../../../core/api/chat-bot.service';
import {RecommendationChatMessage} from '../../../../core/models/recommendation-chat-message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: RecommendationChatMessage[] = [];
  private USER_ID = 0;


  constructor(private chatBotService: ChatBotService) {
  }

  ngOnInit(): void {
  }

  onSendMessage(text: string): void {
    console.log(text);
    this.addUserMessage(text);

    this.chatBotService.getAllGlobalRoles(text, this.USER_ID).subscribe(answer => {
      console.log(answer);
      this.addBotMessage(answer);
    });
  }

  addUserMessage(text: string): void {
    console.log(text);
    this.messages.push(new RecommendationChatMessage(text, null));
  }

  addBotMessage(message: RecommendationChatMessage): void {
    this.messages.push(message);
  }
}
