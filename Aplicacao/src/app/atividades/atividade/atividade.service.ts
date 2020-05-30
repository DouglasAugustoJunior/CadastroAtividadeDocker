import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Atividade } from 'src/app/models/Atividade'

const API = 'http://localhost:3000/atividades' // Endereço da API

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private http: HttpClient){} // http é usado para conectar com a API
 
  listAll(page: number){ // Listagem das atividades
    const params = new HttpParams() //QueryParam para enviar na URL
        .append('page', page.toString())
    return this.http // Observable, que não pega os valores da API, só avisa quando estiver com os valores disponíveis
      .get<Atividade[]>(API,{ params }) // Endereço da API
  }

  findById(id){ // Busca por ID
    return this.http.get<Atividade>(API+'/'+id)
  }

  add(atividade){ // Cadastro
    return this.http.post(API,atividade)
  }

  update(atividade){ // Atualização
    return this.http.put(`${API}/${atividade.id}`,atividade)
  }

  remove(atividadeId: number) { // Exclusão
    return this.http.delete(API + '/' + atividadeId)
  }

}