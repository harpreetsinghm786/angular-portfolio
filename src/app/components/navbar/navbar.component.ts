import { Component, inject, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);

  isMenuOpen = false;
  isScrolled = false;

  readonly name = PORTFOLIO_DATA.hero.name;
  readonly initials = this.name
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  ngOnInit(): void {
  this.isScrolled = window.scrollY > 10;
}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

 scrollTo(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const navHeight = (document.querySelector('.navbar') as HTMLElement)?.offsetHeight ?? 80;
  
  // offsetTop is stable — not affected by current scroll position or animations
  const top = el.offsetTop - navHeight - 16;
  
  window.scrollTo({ top, behavior: 'smooth' });
  
  // Close menu AFTER measuring, not before
  this.closeMenu();
}
}