import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  services = [
    { title: 'Backup', icon: 'fas fa-cloud' },
    { title: 'E-mail Corporativo', icon: 'fas fa-envelope' },
    { title: 'Servidor em Nuvem', icon: 'fas fa-server' },
    { title: 'Hospedagem', icon: 'fas fa-hdd' },
    { title: 'Cyber Segurança', icon: 'fas fa-shield-alt' },
    { title: 'Terceirização de T.I.', icon: 'fas fa-briefcase' },
    { title: 'Office Cloud', icon: 'fas fa-cloud-upload-alt' },
    { title: 'Firewall', icon: 'fas fa-firewall' },
  ];

}
