import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  location = signal('Grapevine, TX');
  temp = signal(40);
  condition = signal('hot');
  high = signal(44);
  low = signal(28);
  feelsLike = signal(42);
  isHot = computed(() => this.temp() > 32);
}
