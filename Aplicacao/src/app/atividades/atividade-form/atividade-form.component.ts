import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { AtividadeService } from '../atividade/atividade.service'
import { Router } from '@angular/router'
import { Atividade } from 'src/app/models/Atividade'

@Component({
  selector: 'ap-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent {

  //#region Variáveis
  atividadeForm: FormGroup // não recebe nada porque terá os valores do FormBuilder
  atividade: Atividade
  success= false
  //#endregion Variáveis

  constructor(
    private formBuilder: FormBuilder,
    private atividadeService: AtividadeService,
    private route: Router) {
      this.atividadeForm = this.formBuilder.group({
        description: [ '', [Validators.maxLength(300),Validators.required] ]
      }) // itens do formulário com suas validações
  }

  salvar(e){ // Cadastra a atividade
    e.preventDefault() // Evita que a página recarregue
    this.atividade = {name: this.atividadeForm.controls.description.value} // Insere a descrição
    this.atividadeService.add(this.atividade).subscribe(res =>{ // Da o subscribe para validar se cadastrou
      if(res){ // Se houve retorno
        this.success = true // exibe o alerta
        setTimeout(() => {
          this.route.navigateByUrl('/') // volta para a home
        }, 400)
      }
    })
  }

}