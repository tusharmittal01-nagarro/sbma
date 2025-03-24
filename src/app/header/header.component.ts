import { Component, HostListener } from '@angular/core';
import { AnnouncementSectionComponent } from './announcement-section/announcement-section.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AnnouncementSectionComponent,
    AccordionComponent,
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
  products = [
    { id: 1, name: 'Apple Cider Vinegar' },
    { id: 2, name: 'Herbal Tea' },
    { id: 3, name: 'Organic Honey' },
    { id: 4, name: 'Ayurvedic Supplements' },
  ];

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
