import {Component, OnInit} from '@angular/core';
import {ChatBotService} from '../../../../core/api/chat-bot.service';
import {RecommendationChatMessage} from '../../../../core/models/recommendation-chat-message.model';

class ChatComponentMessage {
  username: string;
  date: Date;
  text: string;
  reply: boolean;

  constructor(text: string, reply: boolean, username: string, date: Date) {
    this.username = username;
    this.date = date;
    this.text = text;
    this.reply = reply;
  }
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private USER_ID = 0;
  messages: ChatComponentMessage[] = [];
  private USER_NAME = 'Bob';


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
    const userMessage = new ChatComponentMessage(text, false, this.USER_NAME, new Date());
    this.messages.push(userMessage);
  }

  addBotMessage(message: RecommendationChatMessage): void {
    this.messages.push(new ChatComponentMessage(message.text, true, 'Bot', new Date()));

    for (const film of message.films) {
      this.messages.push(new ChatComponentMessage(film.name, true, 'Bot', new Date()));
      this.messages.push(new ChatComponentMessage(film.description, true, 'Bot', new Date()));
    }
  }


}
