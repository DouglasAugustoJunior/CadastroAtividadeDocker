import { NgModule } from '@angular/core'

import { AtividadeModule } from './atividade/atividade.module'
import { AtividadeListModule } from './atividade-list/atividade-list.module'
import { AtividadeFormModule } from './atividade-form/atividade-form.module'
import { AtividadeDetailModule } from './atividade-detail/atividade-detail.module'

@NgModule({
  imports: [
    AtividadeModule,
    AtividadeFormModule,
    AtividadeListModule,
    AtividadeDetailModule
  ]
})
export class AtividadesModule { }