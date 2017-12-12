import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../overview/overview.component';
import { DetailsComponent } from '../details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OverviewComponent, DetailsComponent]
})
export class BaseModule { }
