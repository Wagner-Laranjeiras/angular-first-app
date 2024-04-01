import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://images.pexels.com/photos';

  housingLocationList: HousingLocationInterface[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): HousingLocationInterface[] {
    return this.housingLocationList;
  }

  getHousingLocationById( id:number ): HousingLocationInterface | undefined {
    return this.housingLocationList.find( (housingLocation) => housingLocation.id === id );
  }

  constructor() { }
}
