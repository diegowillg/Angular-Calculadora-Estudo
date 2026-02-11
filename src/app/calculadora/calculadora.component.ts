import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1?: number ;
  numero2?: number ;
  resultado?: number;

  CalcularResultado() {
    console.log('Calculando resultado...');
    console.log('Número 1:', this.numero1);
    console.log('Número 2:', this.numero2); 
    this.resultado = (this.numero1 || 0) + (this.numero2 || 0);
  }

 LimparResultado() {
    this.resultado = 0; 
  }
}