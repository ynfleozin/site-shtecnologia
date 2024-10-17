import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {
  cases = [
    { name: 'Microsoft Partner', logo: 'assets/images/cases/microsoft-partner-logo.webp' },
    { name: 'Acronis', logo: 'assets/images/cases/acronis.webp' },
    { name: 'Bit Defender', logo: 'assets/images/cases/bitdefender.webp' },
    { name: 'Opsense', logo: 'assets/images/cases/opnsense.webp' },
    { name: 'Microsoft Azure', logo: 'assets/images/cases/microsoft-azure.webp' },
    { name: 'Google', logo: 'assets/images/cases/google.webp' },
    { name: 'Zoho', logo: 'assets/images/cases/zoho.webp' },
    { name: 'Addee', logo: 'assets/images/cases/addee.webp' },
    { name: 'Starti', logo: 'assets/images/cases/starti.webp' },
  ];
}
