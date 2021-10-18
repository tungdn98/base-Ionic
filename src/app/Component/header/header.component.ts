import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('name') name ='blank header';
  @Input('href') href ='';

  constructor() { }

  ngOnInit() {}



}
