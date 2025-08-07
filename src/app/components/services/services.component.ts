import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollCarousel(direction: 'left' | 'right') {
    const container = this.carousel.nativeElement;
    const scrollAmount = 320;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
