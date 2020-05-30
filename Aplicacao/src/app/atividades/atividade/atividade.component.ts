import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'ap-atividade',
  templateUrl: './atividade.component.html'
})
export class AtividadeComponent {

  //#region Inbound properties
  @Input()description
  @Input()join_date
  //#endregion Inbound properties

}