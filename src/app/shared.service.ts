import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private readonly titleService: Title) {}

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
