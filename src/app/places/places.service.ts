import { Injectable } from '@angular/core';
import { PlacesModel } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: PlacesModel[] = [
    new PlacesModel(
      '1',
      'mindtree',
      'welcome to possible',
      'https://upload.wikimedia.org/wikipedia/en/3/35/MindTree_Chennai_Campus.JPG',
      100
    ),
    new PlacesModel(
      '2',
      'zoho',
      'made in india,made for india',
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Zoho_headquarters_in_chennai.jpg',
      150
    ),
    new PlacesModel(
      '4',
      'accenture',
      'High performance delivereds',
      'https://upload.wikimedia.org/wikipedia/en/f/f5/Mphasis-cv-raman-nagar-bangalore.jpg',
      170
    ),

  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
