import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  videos = [
    {
      title: 'Testimonio 1',
      type: 'vimeo',
      url: 'https://player.vimeo.com/video/967292388'
    },
    {
      title: 'Testimonio 2',
      type: 'vimeo',
      url: 'https://player.vimeo.com/video/967292218'
    },
    {
      title: 'Consultoría',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/IKf21MLQ3hI'
    }
  ];
}
