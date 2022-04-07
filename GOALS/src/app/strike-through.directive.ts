import { Directive ,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikeThrough]'
})
export class StrikeThroughDirective {
  
constructor(private elem:ElementRef){}

@HostListener('click') onClicks(){
  this.textDeco('line-through')
}
@HostListener('dbclick') onDoubleClicks(){
  this.textDeco('none')
}
private textDeco(action:string){
  this.elem.nativeElement.style.textDecoration=action
}


 

  }


