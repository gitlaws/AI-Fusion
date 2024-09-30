import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedChatbot: any;
  chatbots = [
    { name: 'Gemini', description: 'Gemini AI chatbot description' },
    {
      name: 'Hugging Face',
      description: 'Hugging Face AI chatbot description',
    },
  ];
}
