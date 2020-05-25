import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-circle',
  templateUrl: './help-circle.component.html',
  styleUrls: ['./help-circle.component.scss']
})
export class HelpCircleComponent implements OnInit {

  toggleMenuItems: boolean  = false;
  items= [{title:'عربي'}, {title:'한국어'}, {title:'English'}, ]
  constructor() { }

  ngOnInit(): void {
  }

}
