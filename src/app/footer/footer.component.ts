import { Component } from '@angular/core';
import { ScrollService } from '../../assets/services/scrollservice';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = "sh@shtecno.com.br";

  constructor(
    private scrollService: ScrollService,
  ){}

  scrollToSection(sectionId: string): void {
    this.scrollService.navigateAndScroll(sectionId);
  }
}
