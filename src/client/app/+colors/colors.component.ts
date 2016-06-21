import { Component } from '@angular/core';
import { ColorsService } from '../shared/index';
/**
 *
 */
@Component({
  moduleId: module.id,
  selector: 'sd-colors',
  templateUrl: 'colors.component.html',
  styleUrls: ['colors.component.css'],
  providers: [ColorsService]
})
export class ColorsComponent {
  constructor(public colorsService: ColorsService) {}
}
