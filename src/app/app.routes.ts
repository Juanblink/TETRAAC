import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './components/videos/book/book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },     // Página principal
  { path: 'book', component: BookComponent }  // Página del libro
];
