import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  active: boolean = false;

  shortenLink(value:string) {
    !value.length?this.active = true: this.active = false;
  }
}
