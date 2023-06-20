import { NgModule } from '@angular/core';
import { ChartDirective } from './chart.directive';
import { CommonModule } from '@angular/common';
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ChartDirective ],
  bootstrap:    [ ],
  exports:      [ ChartDirective ]
})
export class ChartDirectiveModule { }