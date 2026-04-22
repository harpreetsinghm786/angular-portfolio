import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

const STATUSES = [
  'Initializing',
  'Loading modules',
  'Compiling assets',
  'Ready',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  splashHidden = false;
  statusText = STATUSES[0];

  readonly initials = PORTFOLIO_DATA.hero.name
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  ngOnInit(): void {
    // Lock scroll during splash
    document.body.style.overflow = 'hidden';

    let i = 1;
    const interval = setInterval(() => {
      if (i < STATUSES.length) {
        this.statusText = STATUSES[i++];
      } else {
        clearInterval(interval);
      }
    }, 380);

    setTimeout(() => {
      this.splashHidden = true;
      document.body.style.overflow = '';
      document.body.classList.add('splash-done'); // ← add this
    }, 1800);

  }
}