import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorido]'
})
export class ColoridoDirective {

  constructor(private elemento: ElementRef, private renderer: Renderer2) {
    
  }

}
