import {
  Component,
  ViewChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-ai-interface',
  standalone: true,
  imports: [],
  templateUrl: './ai-interface.component.html',
  styleUrls: ['./ai-interface.component.scss'],
})
export class AiInterfaceComponent implements AfterViewInit {
  @ViewChild('inputField') inputField!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.focusInputField();
  }

  private focusInputField(): void {
    if (this.inputField && this.inputField.nativeElement) {
      this.renderer.selectRootElement(this.inputField.nativeElement).focus();
    }
  }
}
