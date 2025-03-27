import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header><img src="DVD2.png" alt="Logo">
  <h1>{{title}}</h1></header>`,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'EL DIARIO DE MANDY';
}
