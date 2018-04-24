import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-update',
  templateUrl: './restaurant-update.component.html',
  styleUrls: ['./restaurant-update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Output() updateRestaurantEvent = new EventEmitter();
  restaurantUpdate: Restaurant = new Restaurant;

  constructor() { }

  ngOnInit() {
    Object.assign(this.restaurantUpdate, this.restaurant);
    console.log(this.restaurantUpdate);
  }

  update(){
    this.restaurantUpdate.editable = false;
    this.restaurant
    this.updateRestaurantEvent.emit(this.restaurantUpdate);
  }
}
