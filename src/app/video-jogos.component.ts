import { Component } from '@angular/core';


@Component({
    selector: 'videojgos',
    templateUrl:'./video-jogos.componentes.html'
})

export class VideoJogosComponent{
    public nome:string ;
    public melhorJogo:string;
    public melhorJogoRetro:string ;
    public mostraRetro:boolean ;
    public color:string ;
    public videoJogos:Array<string>;
    public ano:number;


    constructor(){
        this.nome = 'Video-Jogos';
        this.melhorJogo = 'COD WII';
        this.melhorJogoRetro = 'Mario Bros Nintendo 8-bits';
        this.mostraRetro = true;
        this.color = "red";
        this.ano = 2018;
        this.videoJogos = ['COD II','GTA','STAR TREK','FIFA 2018'];

    }
}
