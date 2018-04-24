import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService} from './restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurantz : Restaurant;
  @Output() updateRestaurantEvent = new EventEmitter();
  restaurants: Array<Restaurant> = [
  ];

  constructor(private _restaurantService: RestaurantService, private router: Router) {
   }

  ngOnInit() {
    console.log("wowzers");
    this.getRestaurants();
  }

  getRestaurants() {
    console.log("restaurant");
    var n = Date.now();
    this._restaurantService.getRestaurants()
    .then(restaurants => {this.restaurants = restaurants; for( var rest of this.restaurants){
      if(parseInt(rest.created_at.slice(11,13))!=Math.floor((n/(1000*60*60))%24)){rest.out=false}
      if(parseInt(rest.created_at.slice(14,16))<Math.floor((n/(1000*60))%60)){rest.out =false}}})
    .catch(err => console.log(err));
  }
  
  create(restaurant: Restaurant) {
    this._restaurantService.create(restaurant)
    .then(status => this.getRestaurants())
    .catch(err => console.log(err));
    this.restaurants.push(restaurant);
  }

  destroy(restaurant: Restaurant) {
    this._restaurantService.destroy(restaurant)
    .then(status => this.getRestaurants())
    .catch(err => console.log(err));
  }

  update(restaurant: any) {
    console.log(restaurant);
    this._restaurantService.update(restaurant)
    .then(status => this.getRestaurants())
    .catch(err => console.log(err))
  }
}