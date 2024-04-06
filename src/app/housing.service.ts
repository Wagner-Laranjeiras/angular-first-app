import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location.interface';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  //baseUrl = 'https://images.pexels.com/photos';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
    const data = await fetch(this.url);
    return ( await data.json() ) ?? [];
  }

  async getHousingLocationById( id:number ): Promise<HousingLocationInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return ( await data.json() ) ?? {};
  }
  
  submitApplication( firstName: string, lastName: string, email: string ) {
    // tslint:disable-next-line
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

  constructor() { }
}
