import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  active: boolean = false;
  cardsInformation: CardsInformation[] = [
    {
      title: 'Brand Recognition',
      text: 'Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.',
      img: '../../assets/home/icon-brand-recognition.svg'
    },
    {
      title: 'Detailed Records',
      text: ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      img: '../../assets/home/icon-detailed-records.svg'
    },
    {
      title: ' Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      img: '../../assets/home/icon-fully-customizable.svg'
    },
  ]
  shortenLink(value:string) {
    !value.length?this.active = true: this.active = false;
  }
  copyButton() {
  }
}

interface CardsInformation {
  title: string;
  text: string;
  img: string;
}
