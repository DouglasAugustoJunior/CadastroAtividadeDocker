import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Atividade } from 'src/app/models/Atividade'
import { AtividadeService } from '../atividade/atividade.service'

@Component({
  selector: 'ap-atividade-list',
  templateUrl: './atividade-list.component.html'
})
export class AtividadeListComponent implements OnInit { //Implementando o OnInit para ser avisado do método

  //#region Variáveis
  atividades:Atividade[] = []
  filter: string = ''
  hasMore: boolean = true // Indica se existe mais algo a exibir, passa para o componente load-button no HTML
  currentPage: number = 1 // número da página
  //#endregion Variáveis

  constructor( // atividadeService chama o serviço que bate na API
    private activatedRoute: ActivatedRoute,
    private atividadeService : AtividadeService){}
  
  ngOnInit(){ // Ocorre depois da instância do componente
    this.atividades = this.activatedRoute.snapshot.data['atividades'] // pega a atividade presente no routing no resolve
  }

  load(){
    this.atividadeService.listAll(++this.currentPage) // incrementa o n° da página para verificar se eiste uma próxima
    .subscribe(atividades => { // Pega o array de atividades que a nova página enviou
      this.filter = '' //limpa a busca
      this.atividades = this.atividades.concat(atividades) // adiciona essas novas atividades ao array com concat para atualizar no outro componente
      if(!atividades.length) this.hasMore = false // Se nã retornou nenhuma atividade o botão de carregar fica falso e some
    })
  }

}