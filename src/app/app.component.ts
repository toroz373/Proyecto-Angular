import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <app-header></app-header>
    <app-menu></app-menu>
    <main>
      <h2>Bienvenido a El Diario de Mandy</h2>
      <img src="images/Galeria/imag1.jpeg" alt="Logo">
      <img src="images/Galeria/imag2.jpeg" alt="Logo">
      <img src="images/Galeria/imag3.jpeg" alt="Logo">
      <img src="images/Galeria/imag4.jpeg" alt="Logo">
      <img src="images/Galeria/imag5.jpeg" alt="Logo">
      <img src="images/Galeria/imag6.jpeg" alt="Logo">
      <img src="images/Galeria/imag7.jpeg" alt="Logo">
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
}
