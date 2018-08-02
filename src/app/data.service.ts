import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  busca(){
    return 'Conexao hhttp com back end!';
  }

  jogos =['Plantas vc Zumbis','PES2018','Black Ops'];


  
}
