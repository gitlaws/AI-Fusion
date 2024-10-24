import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-selection',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './ai-selection.component.html',
  styleUrl: './ai-selection.component.scss',
})
export class AiSelectionComponent {
  selectedChatbot: any;
  chatbots = [
    { name: 'Gemini', description: 'Gemini AI chatbot description' },
    {
      name: 'Hugging Face',
      description: 'Hugging Face AI chatbot description',
    },
  ];
}
