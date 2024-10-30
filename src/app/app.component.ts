import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { ChatBotComponent } from './features/chat-bot/chat-bot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, SidenavComponent, ChatBotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AI-Fusion';
}
