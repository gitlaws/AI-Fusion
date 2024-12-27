import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { InputAreaComponent } from '../input-area/input-area.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollingModule, InputAreaComponent],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements AfterViewInit {
  handleMessageSent($event: string) {
    throw new Error('Method not implemented.');
  }
  onScroll(): void {
    console.log('Scrolled');
  }
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
}
