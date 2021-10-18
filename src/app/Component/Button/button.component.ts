import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  text: string;
  @Input('myText') textTouse='button click';
  @Input('type') type='button';
  // eslint-disable-next-line @angular-eslint/no-input-rename,@typescript-eslint/member-ordering
  @Input('size') size='small'; // medium ,full ,small

  @Input('expand') expand='block'; // block , full

  constructor() {
  }

  ngOnInit() {

  }


}
