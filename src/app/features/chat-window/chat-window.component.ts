import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollingModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  messages: string[] = [];
  newMessage: string = '';

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  @Input() set receivedMessage(message: string) {
    if (message) {
      this.messages.push(message);
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.viewport.scrollToIndex(this.messages.length);
    });
  }

  onScroll() {
    // Handle manual scrolling and save scroll position if needed
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
