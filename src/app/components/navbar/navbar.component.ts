import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ✅ ¡Verifica que esta línea exista!

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink // ✅ ¡Y que esté aquí también!
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}