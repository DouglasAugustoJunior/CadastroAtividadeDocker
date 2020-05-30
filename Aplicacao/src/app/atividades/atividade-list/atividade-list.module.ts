import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AtividadeModule } from '../atividade/atividade.module'
import { FilterByDescriptionPipe } from './filter-by-description.pipe'
import { LoadButtonComponent } from './load-button/load-button.component'
import { AtividadesComponent } from './atividades/atividades.component'
import { AtividadeListComponent } from './atividade-list.component'
import { CardModule } from 'src/app/shared/components/card/card.module'
import { SearchComponent } from './search/search.component'
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module'

@NgModule({
  declarations: [
    LoadButtonComponent,
    AtividadesComponent,
    AtividadeListComponent,
    FilterByDescriptionPipe,
    SearchComponent  // Pipe da busca
  ],
  imports: [
    RouterModule, // Para o atividades.componente acessar a rota da atividade.detail
    CommonModule,
    CardModule, // Possui somente o componente de Card
    AtividadeModule, // Precisa dos componentes disponíveis nesse módulo
    DarkenOnHoverModule // Possui diretive de mouseover
  ]
})
export class AtividadeListModule { }