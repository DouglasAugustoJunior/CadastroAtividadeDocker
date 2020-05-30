import { AbstractControl } from '@angular/forms'

export function lowerCaseValidator(control: AbstractControl){

    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){ // se não estiver vazio e não estiver dentro do padrão da expressão
        return { lowercase: true} // retorna true para dar erro
    }
    return null // senão retorna null
}