import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'im2m-details',
  templateUrl: "./details.component.html"
})
export class DetailsComponent {

  @Input()
  name: string;

  @Input()
  description: string;

}
