import { Component, OnInit, Input } from '@angular/core';
import { AppBar } from '../models/appbar.model';

@Component({
  selector: 'ui-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  @Input() config : AppBar;


  constructor() { }

  ngOnInit() {
  }

}
