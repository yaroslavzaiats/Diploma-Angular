import { Component, OnInit} from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit{
  
  constructor(
    private cartService: CartService
  ) { }


  ngOnInit() {
    this.loadItems();
  }
  loadItems(){
    this.cartService.loadItems();
  }
  cards = [
    {name: 'Кава Старого Львова 1 кг', price: '198₴', count: 1, src: 'https://i2.rozetka.ua/goods/2372944/starogo_lvova_4820000371582_images_2372944321.jpg', 
    modalID: 'modalOne',  modalTarget: "#modalOne", text: `Одна з найсмачніших сумішей, які готувалися в салонах і ресторанах старого Львова для шанувальників натуральної кави.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Україна'},
    {name: 'Ferarra Caffe Arabica 1 кг', price: '285₴', count: 1, src: 'https://i2.rozetka.ua/goods/16928863/ferarra_4820198875183_images_16928863603.jpg', 
    modalID: 'modalTwo', modalTarget: "#modalTwo", text: `Це баланс між смачною кислинкою й бадьорою гіркуватістю. Букет, створений для поціновувачів справжнього еспресо.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Україна'},
    {name: 'Dallmayr Prodomo 500 г', price: '186₴', count: 1, src: 'https://i8.rozetka.ua/goods/18639172/dallmayr_4008167103219_images_18639172807.jpg', 
    modalID: 'modalThree', modalTarget: "#modalThree", text: `Німецька кава популярна в Австрії, Британії і Швеції, куди вже півтора століття постачає екзотичні фрукти, шоколад та інші ласощі Будинок делікатесів Далмаєр.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '500 г', sort: 'Арабіка', frying: 'Світла', country: 'Німеччина'},
    {name: `Dallmayr Crema d'Oro 1 кг`, price: '407₴', count: 1, src: 'https://i8.rozetka.ua/goods/18639110/dallmayr_4008167152729_images_18639110059.jpg', 
    modalID: 'modalFour', modalTarget: "#modalFour", text: `Німецька кава популярна в Австрії, Британії і Швеції, куди вже півтора століття постачає екзотичні фрукти, шоколад та інші ласощі Будинок делікатесів Далмаєр.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Світла', country: 'Німеччина'},
    {name: 'Lavazza Qualita Oro 1 кг', price: '770₴', count: 1, src: 'https://i2.rozetka.ua/goods/2122630/lavazza_8000070020511_images_2122630945.jpg', 
    modalID: 'modalFive', modalTarget: "#modalFive", text: `Натуральна кава в зернах Lavazza Qualita Oro середнього обсмаження — істинний фаворит поціновувачів італійської кави, справжнє "кавове золото".`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Італія'}, {name: 'Кава Старого Львова 1 кг', price: '198₴', count: 1, src: 'https://i2.rozetka.ua/goods/2372944/starogo_lvova_4820000371582_images_2372944321.jpg', 
    modalID: 'modalSix',  modalTarget: "#modalSix", text: `Одна з найсмачніших сумішей, які готувалися в салонах і ресторанах старого Львова для шанувальників натуральної кави.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Україна'},
    {name: 'Ferarra Caffe Arabica 1 кг', price: '285₴', count: 1, src: 'https://i2.rozetka.ua/goods/16928863/ferarra_4820198875183_images_16928863603.jpg', 
    modalID: 'modalSeven', modalTarget: "#modalSeven", text: `Це баланс між смачною кислинкою й бадьорою гіркуватістю. Букет, створений для поціновувачів справжнього еспресо.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Україна'},
    {name: 'Dallmayr Prodomo 500 г', price: '186₴', count: 1, src: 'https://i8.rozetka.ua/goods/18639172/dallmayr_4008167103219_images_18639172807.jpg', 
    modalID: 'modalThree', modalTarget: "#modalThree", text: `Німецька кава популярна в Австрії, Британії і Швеції, куди вже півтора століття постачає екзотичні фрукти, шоколад та інші ласощі Будинок делікатесів Далмаєр.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '500 г', sort: 'Арабіка', frying: 'Світла', country: 'Німеччина'},
    {name: `Dallmayr Crema d'Oro 1 кг`, price: '407₴', count: 1, src: 'https://i8.rozetka.ua/goods/18639110/dallmayr_4008167152729_images_18639110059.jpg', 
    modalID: 'modalFour', modalTarget: "#modalFour", text: `Німецька кава популярна в Австрії, Британії і Швеції, куди вже півтора століття постачає екзотичні фрукти, шоколад та інші ласощі Будинок делікатесів Далмаєр.`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Світла', country: 'Німеччина'},
    {name: 'Lavazza Qualita Oro 1 кг', price: '770₴', count: 1, src: 'https://i2.rozetka.ua/goods/2122630/lavazza_8000070020511_images_2122630945.jpg', 
    modalID: 'modalFive', modalTarget: "#modalFive", text: `Натуральна кава в зернах Lavazza Qualita Oro середнього обсмаження — істинний фаворит поціновувачів італійської кави, справжнє "кавове золото".`,
    specialty: 'Натуральні', type: 'У зернах', mass: '1 кг', sort: 'Арабіка', frying: 'Середня', country: 'Італія'}
  ]
  
  searchStr = '';
}
