import { Component, Input, OnChanges } from '@angular/core'
import { SimpleChanges } from "@angular/core"

import { Atividade } from 'src/app/models/Atividade'

@Component({
  selector: 'ap-atividades',
  templateUrl: './atividades.component.html'
})
export class AtividadesComponent implements OnChanges {

  //#region Variáveis
  @Input() atividades: Atividade[] = [] // Recebe as atividades do atividade-list pelo HTML
  rows: any[]= []
  //#endregion Variáveis

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.atividades) // Se houver alterações em atividades ele carrega a lista de atividades em grupos
      this.rows = this.groupColumns(this.atividades)
  }

  groupColumns(atividades: Atividade[]) {
    const newRows = []

    for(let index = 0; index < atividades.length; index+=3){
      newRows.push(atividades.slice(index,index +3)) // Pega a posição inicial index até index +3 e fatia o array, de 0,1,2| 3,4,5....
    }

    return newRows
  }

}