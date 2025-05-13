import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contentList = [
    { heading: 'What is ExitTalk AI?', paragraph: 'ExitTalk AI is an intelligent platform designed to streamline exit interviews and gather actionable feedback.' },
    { heading: 'Why use ExitTalk AI?', paragraph: 'It helps organizations understand employee experiences and improve retention strategies.' },
    { heading: 'How does it work?', paragraph: 'ExitTalk AI uses advanced analytics and conversational AI to provide meaningful insights from exit interviews.' }
  ];
}
