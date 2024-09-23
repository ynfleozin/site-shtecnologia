import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {
  cases = [
    { name: 'Empresa', logo: 'assets/cases/4ls-sistemas.png' },
    { name: 'Empresa', logo: 'assets/cases/iron.png' },
    { name: 'Empresa', logo: 'assets/cases/nunes.png' },
    { name: 'Empresa', logo: 'assets/cases/maxipas.png' },
    { name: 'Empresa', logo: 'assets/cases/cristalcopo.png' },
    { name: 'Empresa', logo: 'assets/cases/alfa.png' },
    { name: 'Empresa', logo: 'assets/cases/upquery.png' },
    { name: 'Empresa', logo: 'assets/cases/biofitus.png' },
    { name: 'Empresa', logo: 'assets/cases/biofitus.png' }
  ];
}
