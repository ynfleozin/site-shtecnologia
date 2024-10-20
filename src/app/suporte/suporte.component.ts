import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})
export class SuporteComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // Verifica se o script já foi adicionado
    if (!document.getElementById('chat-script')) {
      const script = document.createElement('script');
      script.id = 'chat-script'; // Define um id para evitar múltiplas inserções
      script.type = 'text/javascript';
      script.src = 'https://public-assets.tiflux.com/chat_widget.js?organization_token=374d444dffceea5e74efa25e6f70300a808655ed';
      document.head.appendChild(script);

      // Adiciona as configurações do chat
      script.onload = () => {
        (window as any).organization_token = "374d444dffceea5e74efa25e6f70300a808655ed";
        (window as any).icon_color = "#0cc4b6";
        (window as any).init_minimal = true;
        (window as any).show_chat_icon = true;
      };
    }
  }

  ngOnDestroy(): void {
    // Remove o script de chat ao sair da página
    const script = document.getElementById('chat-script');
    if (script) {
      script.remove();
    }

    // Remove também o elemento do chat caso ele já tenha sido inserido
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
      chatWidget.remove();
    }
  }
}
