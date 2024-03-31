import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location.interface';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
      class="listing-photo"
      [src]="housingLocationInterface.photo" 
      alt="Exterior photo of {{ housingLocationInterface.name }}"
      title="Exterior photo of {{ housingLocationInterface.name }}"
      crossorigin
      />
      <h2 class="listing-heading">{{ housingLocationInterface.name }}</h2>
      <p class="listing-location">{{ housingLocationInterface.city }}, {{ housingLocationInterface.state }} </p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocationInterface!: HousingLocationInterface;
}
