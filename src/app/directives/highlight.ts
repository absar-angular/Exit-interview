import { Directive, HostBinding, HostListener, Input } from "@angular/core";



@Directive({
    selector:'[highlight]',
    standalone:true
})
export class HighlightDirective {

@Input('highlight') color!:string
@HostBinding('style.background') bgColor = 'transparent'
@HostBinding('class.header') isHighlighted = false
@HostListener('mouseenter') onMuse(){
    this.bgColor = this.color
    this.isHighlighted = true
} 
@HostListener('mouseleave') onMuseLeave(){
    this.bgColor = 'transparent'
    this.isHighlighted = false
} 
}