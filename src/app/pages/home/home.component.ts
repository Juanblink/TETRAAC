import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { VideosComponent } from '../../components/videos/videos.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesComponent,
    VideosComponent,
    HeroComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // 👈 corregido a plural
})
export class HomeComponent {}
