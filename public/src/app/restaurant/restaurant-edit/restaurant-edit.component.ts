import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService } from '../restaurant.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant: Restaurant;
  restaurantEdit: Restaurant = new Restaurant();
  restaurants: Array<Restaurant> = [];

  constructor(private _restaurantService: RestaurantService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id)
    });
    this.getRestaurant();

  }
  getRestaurant() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id);
      this._restaurantService.getRestaurantId(params.id)
      .then(restaurant => this.restaurantEdit =restaurant)
      .catch(err => console.log(err));
    });
    console.log("done");
  }
  update(){
    this._restaurantService.update(this.restaurantEdit)
    .then(status => this.router.navigate([""]))
    .catch(err => console.log(err))
  }

}
