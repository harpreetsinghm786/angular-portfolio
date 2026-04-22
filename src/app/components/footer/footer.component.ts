import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socials  = PORTFOLIO_DATA.socials;
  name     = PORTFOLIO_DATA.hero.name;
  year     = new Date().getFullYear();

  /** First letter of each word in the name, up to 2 chars */
  get initials(): string {
    return this.name
      .split(' ')
      .map((w: string) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}