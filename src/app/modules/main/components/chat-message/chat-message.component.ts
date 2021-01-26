import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  name: string;

  @Input()
  date: Date = new Date();

  @Input()
  reply = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
