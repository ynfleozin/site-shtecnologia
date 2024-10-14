import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private router: Router) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateAndScroll(elementId: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToElement(elementId);
      }, 100);
    });
  }
}
