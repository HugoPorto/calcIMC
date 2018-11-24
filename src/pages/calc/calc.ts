import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {
  public model: Calc;
  public imc: number;
  public sugestao_peso: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = new Calc;
    this.model.altura = null;
    this.model.peso = null;
    this.imc = null;
    this.sugestao_peso = "";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  calcular(){

    this.imc = this.model.peso / (this.model.altura * this.model.altura);

    if (this.imc < 20) {
        this.sugestao_peso = "20 é o índice correto para o peso ideal, você está abaixo do pesso ideal!";
    } else if (this.imc > 20 && this.imc < 25) {
        this.sugestao_peso = "Parabéns, você está dentro de uma taxa aceitável!";
    } else if (this.imc > 25 && this.imc < 30) {
        this.sugestao_peso = "Fique atento, você esta com sobrepeso!";
    } else if (this.imc > 30 && this.imc < 35) {
        this.sugestao_peso = "É hora de procurar ajuda, você está com obesidade moderada!";
    } else if (this.imc > 35 && this.imc < 40) {
        this.sugestao_peso = "É hora de procurar ajuda médica, você está com obesidade severa!";
    } else if (this.imc > 40 && this.imc < 50) {
        this.sugestao_peso = "É hora de procurar ajuda médica, você está com obesidade móbida!";
    } else if (this.imc > 50) {
        this.sugestao_peso = "Você está corrrendo risco de vida, procure um médico!";
    }
    console.log("Calculando...");
  }
}

export class Calc {
  peso: number;
  altura: number;
}
