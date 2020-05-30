import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { AtividadeService } from '../atividade/atividade.service'
import { Atividade } from 'src/app/models/Atividade'

@Component({
  selector: 'ap-atividade-detail',
  templateUrl: './atividade-detail.component.html',
  styleUrls: ['./atividade-detail.component.css']
})
export class AtividadeDetailComponent implements OnInit {

  //#region Variáveis
  atividade$: Observable<Atividade> // Dados do serviço
  atividadesForm: FormGroup // não recebe nada porque terá os valores do FormBuilder
  flag // Flag para exibição do alerta
  atividade: Atividade
  //#endregion Variáveis

  constructor(
    private atividadeService: AtividadeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
      this.atividadesForm = this.formBuilder.group({
        description: [ '', [Validators.maxLength(300),Validators.required] ]
      }) // itens do formulário com suas validações
    }

  ngOnInit() {
    this.atividade$ = this.atividadeService
      .findById(this.route.snapshot.params.atividadeId) // Pega o ID presente na rota, Faz a busca da atividade por ID na APi
      this.atividade$.subscribe(res => {
        this.atividade = res // Atribui para possível alteração
        this.atividadesForm.controls.description.setValue(res.name) // Preenche o textarea com o dado atual
      })
  }

  alterar(e){
    e.preventDefault()
    this.atividade.name = this.atividadesForm.controls.description.value
    this.atividadeService.update(this.atividade).subscribe(res => {
      if(res){
        this.flag = 'Atualizado' // exibe o alerta de sucesso
        setTimeout(() => {
          this.router.navigateByUrl('/') // volta para a home
        }, 400) // espera 400ms
      }
    })
  }

  deletar(e){ // Remove a atividade pelo ID
    e.preventDefault() // Evita recarregamento da página
    this.atividadeService.remove(this.route.snapshot.params.atividadeId).subscribe(res => { // da o subscribe pra saber se deu certo
      if(res){ // se teve retorno
        this.flag = 'Deletado' // exibe o alerta de sucesso
        setTimeout(() => {
          this.router.navigateByUrl('/') // volta para a home
        }, 400) // espera 400ms
      }
    })
  }

}