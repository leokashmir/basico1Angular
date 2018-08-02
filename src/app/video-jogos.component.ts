import { Component } from '@angular/core';


@Component({
    selector: 'videojgos',
    templateUrl:'./video-jogos.componentes.html'
})

export class VideoJogosComponent{
    public nome = 'Video-Jogos'
    public melhorJogo = 'COD WII';
    public melhorJogoRetro = 'Mario Bros Nintendo 8-bits';
    public mostraRetro = true;
    public color = "red";
    public videoJogos= [
        'COD I',
        'GTA',
        'STAR TREK',
        'FIFA 2018'
    ]
}