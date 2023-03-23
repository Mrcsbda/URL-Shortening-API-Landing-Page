import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      img: '../../assets/home/icon-brand-recognition.svg',
      class: 'card c1'
    },
    {
      title: 'Detailed Records',
      text: ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      img: '../../assets/home/icon-detailed-records.svg',
      class: 'card c2'
    },
    {
      title: ' Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      img: '../../assets/home/icon-fully-customizable.svg',
      class: 'card c3'
    },
  ]
  shortenedLinksContainer: shortenedLinks[] = []
  selected:number|undefined

  constructor(private httpClient: HttpClient) {}

  shortenLink(value:string) {
    if (!value.length) {
      this.active = true
      return ;   
    }
    this.active = false
    const url = `https://api.shrtco.de/v2/shorten?url=${value}`;
    this.httpClient.post<Link>(url, value).subscribe((link: Link) => {
      this.shortenedLinksContainer.push({
        fullLink: value,
        shortenedLink: link.result.full_short_link
      });
    }); 
  }

  copyButton(value:string, index:number) {
    this.selected = index;
  }
}

interface CardsInformation {
  title: string;
  text: string;
  img: string;
  class: string;
}

interface shortenedLinks {
  fullLink: string;
  shortenedLink: string;
}

interface Link {
  ok: boolean;
  result: Result;
}

interface Result {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}
