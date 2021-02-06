import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chatIsOpen = false;

  openChat(): void {
    this.chatIsOpen = true;
  }

  closeChat(): void {
    this.chatIsOpen = false;
  }
}
