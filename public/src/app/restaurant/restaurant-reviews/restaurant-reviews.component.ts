import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService} from './../restaurant.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})
export class RestaurantReviewsComponent implements OnInit {
  rests: Array<Restaurant> = [];
  restaurants: Array<Restaurant> = [
  ];
  restaurant: Restaurant;

  constructor(private _restaurantService: RestaurantService, private activatedRoute: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id)
    });
    this.getRestaurant();
    console.log(this.restaurant);
  }
  getRestaurant() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id);
      this._restaurantService.getRestaurantId(params.id)
      .then(restaurant => {console.log(restaurant);this.restaurants.push(restaurant)})
      .catch(err => console.log(err));
    });
    console.log("done");
  }
  // pets => this.pets = pets.sort((n1:Pet, n2:Pet)=> (n1.type.toLowerCase() === n2.type.toLowerCase() ? 0 : n1.type.toLowerCase() < n2.type.toLowerCase() ? -1 : 1 )))
  // this.restaurants.push(restaurant)
}