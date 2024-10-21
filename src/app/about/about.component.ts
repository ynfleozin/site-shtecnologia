import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  selectedService = {
    title: 'Backup',
    icon: 'fas fa-cloud',
    description: 'Nosso serviço de backup em nuvem garante a segurança dos seus dados com armazenamento fora da empresa, protegendo contra perdas e falhas locais.'
  };

  services = [
    { title: 'Backup', icon: 'fas fa-cloud', description: 'Nosso serviço de backup em nuvem garante a segurança dos seus dados com armazenamento fora da empresa, protegendo contra perdas e falhas locais.' },
    { title: 'E-mail Corporativo', icon: 'fas fa-envelope', description: 'O e-mail corporativo da SH Tecnologia oferece soluções profissionais para comunicação, com segurança e personalização para o domínio da sua empresa.' },
    { title: 'Servidor em Nuvem', icon: 'fas fa-server', description: 'Com servidores em nuvem, sua empresa pode escalar operações com facilidade, garantindo disponibilidade e performance de nível empresarial.' },
    { title: 'Hospedagem', icon: 'fas fa-hdd', description: 'Oferecemos hospedagem segura e confiável para sites e sistemas, com monitoramento constante e suporte especializado.' },
    { title: 'Cyber Segurança', icon: 'fas fa-shield-alt', description: 'Nossos serviços de cyber segurança protegem sua empresa contra ameaças digitais, garantindo a integridade e privacidade das informações.' },
    { title: 'Terceirização de T.I.', icon: 'fas fa-briefcase', description: 'A SH Tecnologia oferece terceirização de serviços de TI para sua empresa focar no core business, enquanto cuidamos da infraestrutura e suporte técnico.' },
    { title: 'Office Cloud', icon: 'fas fa-cloud-upload-alt', description: 'O Office Cloud possibilita a integração e colaboração em tempo real, oferecendo ferramentas produtivas diretamente na nuvem.' },
    { title: 'Firewall', icon: 'fa-solid fa-fire', description: 'Nosso serviço de firewall protege sua rede contra acessos não autorizados, bloqueando ameaças antes que alcancem seu sistema.' }
  ];

  showService(service: { title: string, description: string, icon: string }) {
    this.selectedService = service;
  }
}
