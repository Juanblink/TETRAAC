import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponent } from "./components/services/services.component";
import { VideosComponent } from './components/videos/videos.component'; 
 // ✅ Asegúrate que la ruta sea correcta

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, AboutComponent, NavbarComponent, ServicesComponent,VideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TETRAAC';
}
