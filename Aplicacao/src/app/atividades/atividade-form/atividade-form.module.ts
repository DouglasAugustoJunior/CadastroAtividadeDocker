import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AtividadeFormComponent } from './atividade-form.component'
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module'
import { AtividadeModule } from '../atividade/atividade.module'
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module'

@NgModule({
  declarations: [ AtividadeFormComponent ],
  imports: [
    CommonModule,
    RouterModule, // para poder redirecionar após o upload
    ReactiveFormsModule, // Controlar formulário
    VmessageModule, // Mensagem de campo obrigatório
    AtividadeModule, // Acesso ao componente atividade
    ImmediateClickModule // Click automático no botão
  ]
})
export class AtividadeFormModule { }