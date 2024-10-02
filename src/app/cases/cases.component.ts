import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {
  cases = [
    { name: 'Microsoft Partner', logo: 'assets/images/cases/microsoft-partner.png' },
    { name: 'Acronis', logo: 'assets/images/cases/acronis.png' },
    { name: 'Bit Defender', logo: 'assets/images/cases/bitdefender.png' },
    { name: 'Opsense', logo: 'assets/images/cases/opnsense.png' },
    { name: 'Microsoft Azure', logo: 'assets/images/cases/microsoft-azure.png' },
    { name: 'Google', logo: 'assets/images/cases/google.png' },
    { name: 'Zoho', logo: 'assets/images/cases/zoho.png' },
    { name: 'Addee', logo: 'assets/images/cases/addee.png' },
    { name: 'Starti', logo: 'assets/images/cases/starti.png' },
  ];
}
