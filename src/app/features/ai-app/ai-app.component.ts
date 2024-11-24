import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiSelectionComponent } from '../ai-selection/ai-selection.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { InputAreaComponent } from '../input-area/input-area.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ai-app',
  standalone: true,
  imports: [
    RouterLink,
    AiSelectionComponent,
    ChatWindowComponent,
    InputAreaComponent,
    HttpClientModule,
  ],
  templateUrl: './ai-app.component.html',
  styleUrls: ['./ai-app.component.scss'],
})
export class AiAppComponent {
  messageFromInputArea: string = '';

  constructor(private http: HttpClient) {}

  handleMessageSent(message: string) {
    this.messageFromInputArea = message;

    // Call the Hugging Face API to get the response from GPT-J
    const apiUrl =
      'https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B';
    const headers = {
      Authorization: `Bearer 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`,
    };
    const payload = {
      inputs: message,
    };

    this.http.post(apiUrl, payload, { headers }).subscribe(
      (response: any) => {
        const botResponse = response.generated_text;
        this.messageFromInputArea = botResponse;
      },
      (error) => {
        console.error('Error fetching response from GPT-J:', error);
        console.error('Error details:', error.message);
        console.error('Error status:', error.status);
        this.messageFromInputArea =
          'Error fetching response from GPT-J. Please try again later.';
      }
    );
  }
}
