import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AtividadeDetailComponent } from './atividade-detail.component'
import { AtividadeModule } from '../atividade/atividade.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ AtividadeDetailComponent ],
  imports: [ CommonModule,AtividadeModule, ReactiveFormsModule ],
  exports: [ AtividadeDetailComponent ]
})
export class AtividadeDetailModule { }