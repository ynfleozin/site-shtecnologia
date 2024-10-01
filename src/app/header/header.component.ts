import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btnMenu = document.getElementById('abrir');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    if (btnMenu && menu && overlay) {
      btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
      });

      menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
      });

      overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
      });
    }
  }
}
