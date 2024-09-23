import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const mobileMenuButton = this.renderer.selectRootElement('#mobile-menu-button', true);
    const mobileMenuList = this.renderer.selectRootElement('#mobile-menu-list', true);
    const mobileMenuLinks = mobileMenuList.querySelectorAll('a');

    this.renderer.listen(mobileMenuButton, 'click', () => {
      if (mobileMenuList.classList.contains('show')) {
        this.renderer.removeClass(mobileMenuList, 'show');
      } else {
        this.renderer.addClass(mobileMenuList, 'show');
      }
    });

    mobileMenuLinks.forEach((link: Element) => {
      this.renderer.listen(link, 'click', () => {
        this.renderer.removeClass(mobileMenuList, 'show');
      });
    });
  }
}
