import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiInterfaceComponent } from '../ai-interface/ai-interface.component';
import { AiSelectionComponent } from '../ai-selection/ai-selection.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-ai-app',
  standalone: true,
  imports: [
    RouterLink,
    AiInterfaceComponent,
    AiSelectionComponent,
    ChatWindowComponent,
  ],
  templateUrl: './ai-app.component.html',
  styleUrl: './ai-app.component.scss',
})
export class AiAppComponent {}
