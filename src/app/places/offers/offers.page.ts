import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { PlacesModel } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: PlacesModel[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
