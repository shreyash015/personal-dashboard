import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCard } from './components/weather-card/weather-card';
import { HealthRing } from './components/health-ring/health-ring';
import { CurrencyCard } from './components/currency-card/currency-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherCard, HealthRing, CurrencyCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-dashboard');
}
