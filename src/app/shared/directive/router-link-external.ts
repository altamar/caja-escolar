import { Directive, Input  , HostListener} from '@angular/core';

@Directive({
    selector: '[externalLink]',
})
export class RouterLinkCustomDirective {

    @Input() externalLink: string;
    @HostListener('click')
     onClick() {
        if (this.externalLink) {
          // Process external url
          window.open('https://'+this.externalLink, '_blank');
        }
    }
 }