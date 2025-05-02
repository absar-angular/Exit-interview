import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector:'[tooltip]',
    standalone:true
})

export class TooltipModule {
    @Input('tooltip') tooltipText!: string; 
    private tooltipElement: HTMLElement | null = null;
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    @HostListener('mouseenter') onMouseEnter() {
      if (!this.tooltipText) return;
  
      // Create the tooltip element
      this.tooltipElement = this.renderer.createElement('div');
      const text = this.renderer.createText(this.tooltipText);
      this.renderer.appendChild(this.tooltipElement, text);
  
      // Add styles to the tooltip
      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'background', '#333');
      this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
      this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
      this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
      this.renderer.setStyle(this.tooltipElement, 'fontSize', '12px');
      this.renderer.setStyle(this.tooltipElement, 'whiteSpace', 'nowrap');
      this.renderer.setStyle(this.tooltipElement, 'zIndex', '1000');
      this.renderer.setStyle(this.tooltipElement, 'top', `${this.el.nativeElement.offsetTop - 30}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${this.el.nativeElement.offsetLeft+40}%`);
  
      // Append the tooltip to the body
      this.renderer.appendChild(document.body, this.tooltipElement);
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      // Remove the tooltip element
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }
    }
}