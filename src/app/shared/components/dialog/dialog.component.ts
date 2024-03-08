import { Component, Input } from '@angular/core';

@Component({
  selector: 'fs-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent {
  @Input() size: string = 'lg';
}
