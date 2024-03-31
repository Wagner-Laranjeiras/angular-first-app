import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location.interface';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styles: ``
})
export class HousingLocationComponent {
  @Input() housingLocationInterface!: HousingLocationInterface;

}
