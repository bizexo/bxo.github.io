import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  list;
  isOpen = true;
  constructor() {
    this.list = [
        {name: 'Link come here Consectetur'},
        {name: 'Link come here Aenean euismod'},
        {name: 'Link come here Proin gravida doloet'},
        {name: 'Viverra justo commodo.'},
        {name: 'Proin sodales'}
    ];
  }

  slideToggel() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
