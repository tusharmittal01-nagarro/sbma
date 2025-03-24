import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-section',
  standalone: true,
  imports: [],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss',
})
export class AnnouncementSectionComponent {
  messages: string[] = [
    'COD Available',
    'Free Shipping on Orders Over ₹500',
    'Limited Time Offer: 10% Off',
  ];
  currentIndex: number = 0;
  interval: any;

  constructor() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextMessage();
    }, 3000);
  }

  nextMessage() {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  }

  previousMessage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.messages.length) % this.messages.length;
  }
}
