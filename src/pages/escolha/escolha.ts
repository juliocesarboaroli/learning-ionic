import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage {

    public carro;
    public acessorios;

    constructor(public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
        this.acessorios = [
            { descricao: 'Direção elétrica', preco: 1200 },
            { descricao: 'Ar condicionado', preco: 780 },
            { descricao: 'Multimídia', preco: 1020 },
            { descricao: 'Rodas de liga leve', preco: 2300 },
        ]
    }

}