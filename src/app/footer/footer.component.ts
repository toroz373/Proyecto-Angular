import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer>
    <p>&copy; 2025 Todos los derechos reservados. </p> 
    <p><a href="https://www.facebook.com">
      <img src="images/social/facebook.png"  alt="Logo"></a>
      <a href="https://x.com/">
        <img src="images/social/twitter.png" alt="Logo"></a>
    </p></footer>`,
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
