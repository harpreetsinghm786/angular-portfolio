import { Component, OnInit, OnDestroy } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  data = PORTFOLIO_DATA.hero;

  titles: string[] = [
    'Full Stack Developer',
    'Angular Specialist',
    'Problem Solver'
  ];

  currentTitle = '';
  titleIndex = 0;
  charIndex = 0;

  private typingInterval!: any;
  private typingTimeout!: any;

  tiltStyle = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    this.clearTyping();
  }

  startTyping(): void {
    this.typingInterval = setInterval(() => {
      const current = this.titles[this.titleIndex];

      if (this.charIndex <= current.length) {
        this.currentTitle = current.slice(0, this.charIndex++);
      } else {
        this.clearTyping();
        this.typingTimeout = setTimeout(() => {
          this.charIndex = 0;
          this.titleIndex = (this.titleIndex + 1) % this.titles.length;
          this.startTyping();
        }, 1400);
      }
    }, 80);
  }

  private clearTyping(): void {
    if (this.typingInterval) clearInterval(this.typingInterval);
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  scroll(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;

    this.tiltStyle = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  }

  onMouseLeave(): void {
    this.tiltStyle = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }
}
