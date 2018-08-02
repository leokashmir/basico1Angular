import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
    selector: 'videojgos',
    templateUrl: './video-jogos.componentes.html',
    styleUrls: ['./video-jogos.component.css']
})

export class VideoJogosComponent {
    public nome: string;
    public melhorJogo: string;
    public melhorJogoRetro: string;
    public mostraRetro: boolean;
    public color: string;
    public videoJogos: Array<string>;
    public ano: number;


    constructor(private dataService: DataService) {

        this.nome = 'Video-Jogos';
        this.melhorJogo = 'COD WII';
        this.melhorJogoRetro = 'Mario Bros Nintendo 8-bits';
        this.mostraRetro = true;
        this.color = "red";
        this.ano = 2018;
        this.videoJogos = ['COD II', 'GTA', 'STAR TREK', 'FIFA 2018'];

    }


    retorno:string='';

    ngOnInit() {
        console.log(this.dataService.jogos);
        this.retorno = this.dataService.busca();
    }


    tituloLista = {
        'color': 'red',
        'font-size': '4em'
    }

    exibir(event) {
        alert(event)
        console.log(event)
    }
}
