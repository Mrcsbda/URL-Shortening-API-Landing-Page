import { Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  active: boolean = false;

  activeButton () {
    if (!this.active){
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
