import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AtividadeComponent } from './atividade.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [ AtividadeComponent ],
  imports: [
    CommonModule,
    HttpClientModule // Comunicação com a API
  ],
  exports: [ AtividadeComponent ] //Permite que esse componente seja usado por outros módulos

})
export class AtividadeModule { }