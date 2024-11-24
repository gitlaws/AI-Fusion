import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiSelectionComponent } from '../ai-selection/ai-selection.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { InputAreaComponent } from '../input-area/input-area.component';

@Component({
  selector: 'app-ai-app',
  standalone: true,
  imports: [
    RouterLink,
    AiSelectionComponent,
    ChatWindowComponent,
    InputAreaComponent,
  ],
  templateUrl: './ai-app.component.html',
  styleUrls: ['./ai-app.component.scss'],
})
export class AiAppComponent {
  messageFromInputArea: string = '';

  handleMessageSent(message: string) {
    this.messageFromInputArea = message;
    // Here you can also call the backend API to get the response from the LLM
    // and then update the messageFromInputArea with the response
  }
}
