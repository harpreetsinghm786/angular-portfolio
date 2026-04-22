import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() { this.initTheme(); }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) { this.setDarkTheme(true); }
  }

  toggleTheme() { this.setDarkTheme(!this.isDarkMode()); }

  private setDarkTheme(isDark: boolean) {
    this.isDarkMode.set(isDark);
    if (isDark) { document.body.classList.add('dark-theme'); localStorage.setItem('theme', 'dark'); } 
    else { document.body.classList.remove('dark-theme'); localStorage.setItem('theme', 'light'); }
  }
}