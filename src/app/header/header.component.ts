import { Component } from '@angular/core';
import { AnnouncementSectionComponent } from './announcement-section/announcement-section.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AnnouncementSectionComponent,
    CarouselComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchActive: boolean = false;
  isShopPopupVisible: boolean = false;
  hidePopupTimeout: any;
  searchTerm: string = '';
  lifestyleConcerns = [
    'Pain Care',
    'Stress Care',
    'Piles Care',
    'Hair Care',
    'Liver Care',
    'Diabetes Care',
    'Heart Care',
    'Cough Care',
    'Stomach Care',
    'Woman Care',
    'Man Care',
    'Immunity Care',
    'Weight Management',
  ];

  productCategories = [
    'Patent Capsules',
    'Ayurvedic Chyawanprash',
    'Nourishing Granules',
    'Single-Herb Powerhouses',
    'Tonics 2.0',
    'Premium Oils',
    'Bubbly Ciders',
    'Concentrated Drops',
  ];

  fullTreatmentCourses = ['All Products', 'Bulk Products'];

  toggleSearch(state: boolean) {
    this.searchActive = state;
  }

  performSearch() {
    console.log('Searching for:', this.searchTerm);
    // Implement your search logic here
  }

  showShopPopup() {
    this.isShopPopupVisible = true;
  }

  startHidePopupTimer() {
    this.hidePopupTimeout = setTimeout(() => {
      this.isShopPopupVisible = false;
    }, 300); // Delay for smoother transition
  }

  cancelHidePopupTimer() {
    clearTimeout(this.hidePopupTimeout);
  }
}
