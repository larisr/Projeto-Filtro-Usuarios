import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    UserDetailsComponent
  ]
})
export class ComponentsModule { }
