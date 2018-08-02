import { Component } from '@angular/core';


@Component({
    selector: 'videojgos',
    template:  `
    <h2>{{nome}}</h2>
    <h3 *ngIf="mostraRetro !=true">Melhor Jogo: {{melhorJogo}}</h3>
    <h3 [style.background]="color" *ngIf="mostraRetro ==true">Melhor Jogo: {{melhorJogoRetro}}</h3>
    <h2>Lista de jogos</h2>
    <ul>    
        <li *ngFor="let game of videoJogos">{{game}}</li>
    </ul>
    `
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