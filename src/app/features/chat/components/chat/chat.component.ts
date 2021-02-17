import {Component, OnInit} from '@angular/core';
import {RxStompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit(): void {
    const message = `Hello world!`;
    this.rxStompService.watch('/message').subscribe(value => {
      console.log(value.body);
    });

    this.rxStompService.publish({destination: '/message', body: message});
  }

}
