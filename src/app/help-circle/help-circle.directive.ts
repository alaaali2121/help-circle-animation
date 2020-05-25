import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[toggleMenu]'
})
export class HelpCircleDirective {
  constructor() { }

  clicked: boolean;
  @HostListener('click') toggleMenu() {
    this.clicked = !this.clicked;
  }
  @HostBinding('class.open') isOpen = this.clicked;


}
