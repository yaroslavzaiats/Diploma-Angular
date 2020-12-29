import { Injectable, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Input() card;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  items = [];
  count = 1;
  

  addToCart(item) {
    this._snackBar.open(`${item.name} додано в корзину!`, '',{
      duration: 2000
    })

    if(this.items.length > 0){
      let found = this.items.find(el => el.name === item.name)
      if(found !== undefined){
        let index = this.items.indexOf(this.items.find(el => el.name === item.name))
        found.count++
        this.items.splice(index, 1, found)
        localStorage.clear()       
        this.saveItems()
        
        let cartList = document.querySelector('.cart_list')
        let cartItems = cartList.childNodes
        let itemForChange = cartItems[index]
        let newCount = document.createElement('span')
        newCount.innerHTML = `   x   ${found.count.toString()}`
        itemForChange.firstChild.lastChild.replaceChild(newCount, itemForChange.firstChild.lastChild.firstChild)
        
      } else {
        this.createCartItem(item);
        this.addItem(item.name, item.price, this.count)
        localStorage.clear()
        this.saveItems()
      }
    } else {
      this.createCartItem(item);
      this.addItem(item.name, item.price, this.count)
      localStorage.clear()
      this.saveItems()
    }
  }

  createCartItem(item){
    let cartList = document.querySelector('.cart_list')
    let cartItem = document.createElement('li')
    let itemInfo = document.createElement('div')
    let itemName = document.createElement('span')
    let itemPrice = document.createElement('span')
    let countDiv = document.createElement('div')
    let itemCount = document.createElement('span')
    let deleteItemIcon = document.createElement('img')

    cartItem.className = 'cart-item'
    itemCount.className = 'cart-item-count'
    cartItem.style.cssText = 'margin-bottom: 15px; display: flex; justify-content: space-between'
    itemName.style.cssText = 'margin-right: 30px'
    
    
    itemName.innerHTML = item.name
    itemPrice.innerHTML = item.price
    itemCount.innerHTML = `   x   ${item.count.toString()}`
    deleteItemIcon.src = 'https://www.flaticon.com/svg/static/icons/svg/992/992660.svg'
    deleteItemIcon.style.cssText = 'width: 20px; heigth: 20px; cursor: pointer;'
    deleteItemIcon.onclick = () => {
      cartItem.remove()
      let index = this.items.indexOf(this.items.find(el => el.name === item.name))
      this.items.splice(index, 1)
      localStorage.clear()       
      this.saveItems()
    }

    countDiv.appendChild(itemCount)
    itemInfo.appendChild(itemName)
    itemInfo.appendChild(itemPrice)
    itemInfo.appendChild(countDiv)
    cartItem.appendChild(itemInfo)
    cartItem.appendChild(deleteItemIcon)
    cartList.appendChild(cartItem)
  }
  addItem(name, price, count){
    let item = {
      name: name,
      price: price,
      count: count
    }
    this.items.push(item)
  }

  getItems() {
    let strItems = localStorage.getItem('cart')
    this.items = JSON.parse(strItems)
    !this.items ? this.items = [] : null;
  }
  saveItems(){
    let strItems = JSON.stringify(this.items)
    localStorage.setItem('cart', strItems)
  }

  loadItems(){
    this.getItems()
    this.items.forEach(item => this.createCartItem(item));
  }
}