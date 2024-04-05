import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location.interface';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  //readonly baseUrl = 'https://images.pexels.com/photos';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
    return ( await DataTransfer.json() ) ?? [];
  }

  async getHousingLocationById( id:number ): Promise<HousingLocationInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return ( await DataTransfer.json() ) ?? {};
  }
  
  submitApplication( firstName: string, lastName: string, email: string ) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

  constructor() { }
}
