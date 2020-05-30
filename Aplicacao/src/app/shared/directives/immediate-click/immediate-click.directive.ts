import { Directive, ElementRef, OnInit } from '@angular/core'

import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service'

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{
  
  constructor(
    private element: ElementRef<any>, // Pega o elemento nativo
    private platformDetector: PlatformDetectorService // Serviço que verifica se está no navegador
  ) { }
    
    ngOnInit(): void {
      this.platformDetector.isPlatformBrowser && // Se estiver no navegador ele vai clicar sozinho
      this.element.nativeElement.click()
    }

}