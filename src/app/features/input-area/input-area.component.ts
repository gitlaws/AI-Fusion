import {
  Component,
  ViewChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.scss',
})
export class InputAreaComponent implements AfterViewInit {
  @ViewChild('inputField') inputField!: ElementRef;

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
}
