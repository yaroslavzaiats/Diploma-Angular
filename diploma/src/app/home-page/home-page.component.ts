import { Component} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor() { }
  discounts = [
    {title:'disc1', src: 'https://pics.livejournal.com/bapbapa_serafym/pic/000kwbky'},
    {title:'disc2', src: 'https://pics.livejournal.com/bapbapa_serafym/pic/000kwbky'},
    {title:'disc3', src: 'https://pics.livejournal.com/bapbapa_serafym/pic/000kwbky'},
    {title:'disc4', src: 'https://pics.livejournal.com/bapbapa_serafym/pic/000kwbky'}
  ]

}
