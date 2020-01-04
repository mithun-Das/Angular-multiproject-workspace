import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-library',
  template: `
    <p>
      my-first-library works!
    </p>
  `,
  styles: []
})
export class MyFirstLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
