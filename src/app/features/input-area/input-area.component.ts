import {
  Component,
  ViewChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
})
export class InputAreaComponent implements AfterViewInit {
  newMessage: string = '';
  @ViewChild('inputField') inputField!: ElementRef;
  @Output() messageSent = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.focusInputField();
    }, 0);
  }

  private focusInputField(): void {
    if (this.inputField && this.inputField.nativeElement) {
      this.renderer.selectRootElement(this.inputField.nativeElement).focus();
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageSent.emit(this.newMessage);
      this.newMessage = '';
    }
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
