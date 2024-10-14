import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent {
  trabalhoForm: FormGroup;
  vagasDisponiveis: string[] = [];

  constructor(private fb: FormBuilder) {
    this.vagasDisponiveis = [];

    this.trabalhoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      vaga: ['', Validators.required],
      mensagem: ['', Validators.required],
      curriculo: [null]
    });
  }

  onSubmit() {
    if (this.trabalhoForm.valid) {
      console.log('Formulário enviado:', this.trabalhoForm.value);
      // Aqui você pode implementar o envio do formulário, como uma requisição HTTP
    } else {
      console.log('Formulário inválido');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.trabalhoForm.patchValue({
      curriculo: file
    });
  }
}
