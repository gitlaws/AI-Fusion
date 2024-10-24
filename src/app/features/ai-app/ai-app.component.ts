import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ai-app.component.html',
  styleUrl: './ai-app.component.scss',
})
export class AiAppComponent {}
