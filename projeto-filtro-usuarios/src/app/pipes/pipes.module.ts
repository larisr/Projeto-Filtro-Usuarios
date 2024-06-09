import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashIfEmptyPipe
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashIfEmptyPipe
  ]
})
export class PipesModule { }
