import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent {
  trabalhoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.trabalhoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      mensagem: ['', Validators.required],
      curriculo: [null] // Para o arquivo do currículo
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
