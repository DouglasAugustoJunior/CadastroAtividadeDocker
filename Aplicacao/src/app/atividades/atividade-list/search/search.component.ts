import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit,OnDestroy {

  //#region Variáeveis
  @Output() onTyping = new EventEmitter<string>() // Envia o valor para o HTML, e passa ao elemento pai

  @Input() value: string = '' // valor do HTML que possui um dta binding para limpar junto com variavel filter do elemento pai

  debounce: Subject<string> = new Subject<string>() // objeto que vai permitir esperar um intervalo no input de busca
  //#endregion Variáveis

  ngOnInit() {
    this.debounce
        .pipe(debounceTime(300)) // aguarda 300ms sem que o usuário pressione alguma tecla
        .subscribe(filter => this.onTyping.emit(filter)) // Enviando via EventEmitter para o HTML
  }

  ngOnDestroy(): void { // Quando sair do componente
    this.debounce.unsubscribe() // Encerra a escuta do debounce para não sobrecarregar a memória
  }

}