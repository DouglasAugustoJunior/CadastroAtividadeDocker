import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core'

@Directive({
    selector:'[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    @Input() brightness = '75%' // Propriedade que poderá ser editada ao chamar essa diretiva

    constructor(
        private el: ElementRef, // Pega o elemento nativo
        private render: Renderer // manipula o DOM
    ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`) 
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement,'filter','brightness(100%)')
    }

}