import { Component } from '@angular/core';
import { ColorsService } from '../shared/index';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

/**
 *
 */
@Component({
  moduleId: module.id,
  selector: 'sd-colors',
  templateUrl: 'colors.component.html',
  styleUrls: ['colors.component.css'],
  providers: [ColorsService],
  // directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ColorsComponent {
  constructor(public colorsService: ColorsService) {}
}
