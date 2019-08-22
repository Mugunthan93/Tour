import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { PlacesModel } from '../places.model';
<<<<<<< HEAD
=======
import { MenuController } from '@ionic/angular';
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: PlacesModel[];

  constructor(
<<<<<<< HEAD
    private placesService: PlacesService
=======
    private placesService: PlacesService,
    private menuCtrl: MenuController
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

<<<<<<< HEAD
=======
  onOpenMenu() {
    this.menuCtrl.toggle('side1');
  }

>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a
}
