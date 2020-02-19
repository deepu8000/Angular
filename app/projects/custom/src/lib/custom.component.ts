import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-custom',
  template: `
    <p>
      custom works!
    </p>
  `,
  styles: []
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
