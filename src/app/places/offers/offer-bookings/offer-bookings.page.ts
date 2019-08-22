import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
import { PlacesModel } from '../../places.model';
import { NavComponent } from '@ionic/core';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  place: PlacesModel;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) {
          this.navCtrl.navigateBack('/places/tabs/offers');
        }
        this.place = this.placeService.getPlace(paramMap.get('placeId'));
      }
    );
>>>>>>> 72313c3f608c49f23be85ada90e0a8d9c9b95a6a
  }

}
