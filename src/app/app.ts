import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modelo360 } from './components/modelo360/modelo360';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Modelo360],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
