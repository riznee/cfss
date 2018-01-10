import { Directive } from '@angular/core';

/**
 * Generated class for the MasterDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[master]' // Attribute selector
})
export class MasterDirective {

  constructor() {
    console.log('Hello MasterDirective Directive');
  }

}
