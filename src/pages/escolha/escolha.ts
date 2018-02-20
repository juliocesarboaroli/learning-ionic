import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Acessorio } from '../../domain/carro/acessorio';
import { Carro } from '../../domain/carro/carro';
import { AgendamentoPage } from '../agendamento/agendamento';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage {

    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal: number;

    constructor(public navParams: NavParams, public navCtrl: NavController) {
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
        this.acessorios = [
            new Acessorio('Direção elétrica', 1200),
            new Acessorio( 'Ar condicionado', 780),
            new Acessorio('Multimídia', 1020),
            new Acessorio('Rodas de liga leve', 2300)
        ];
    }

    get precoTotal() {
        return this._precoTotal;
    }

    atualizaTotal(selecionado: boolean, acessorio) {
        selecionado ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
    }

    avancarAgendamento() {
        this.navCtrl.push(AgendamentoPage, {
            carro: this.carro,
            precoTotal: this._precoTotal
        });
    }
}