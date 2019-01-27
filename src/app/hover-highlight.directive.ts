import {Directive, ElementRef, Renderer2, OnInit, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective /*implements OnInit*/{

@HostBinding('style.color') textColor: string;
@Input('appHoverHighlight') highLightColor: {background: string, text: string};
constructor(private elRef: ElementRef, private render: Renderer2) { }

  @HostListener("mouseover") mouseMasuk(evenData: Event){
    this.render.setStyle(this.elRef.nativeElement, 'background-color', this.highLightColor.background);
    this.textColor = this.highLightColor.text;
  }

  @HostListener("mouseleave") mouseKeluar(evenData: Event){
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.textColor = 'black';
  }

  /*ngOnInit(): void{
    this.render.setStyle(this.elRef.nativeElement, 'background-color','red');
}*/
}
