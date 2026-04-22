import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

interface Stat {
  val: number;
  suffix: string;
  label: string;
  display: string;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  about = PORTFOLIO_DATA.about;
  typedText = '';

  stats: Stat[] = [
    { val: 2,    suffix: '+', label: 'Years Exp',     display: '0+' },
    { val: 2000, suffix: '+', label: 'Users Served',  display: '0+' },
    { val: 45,   suffix: '%', label: 'Latency Cut',   display: '0%' },
  ];

  private destroyed = false;

  constructor(private cdr: ChangeDetectorRef,private ngZone: NgZone) {}

  ngOnInit(): void {
  this.typeIntro();
  this.waitForAosThenCount();
}


  ngOnDestroy(): void {
    this.destroyed = true;
  }

  private typeIntro(): void {
    const full = this.about.intro;
    let i = 0;
    const tick = () => {
      if (this.destroyed) return;
      if (i <= full.length) {
        this.typedText = full.slice(0, i++);
        this.cdr.markForCheck();
        setTimeout(tick, 22);
      }
    };
    setTimeout(tick, 400);
  }

  private waitForAosThenCount(): void {
  const section = document.getElementById('about');
  if (!section) { this.animateCounters(); return; }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        this.animateCounters();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(section);
}

  private animateCounters(): void {
  this.stats.forEach((stat, idx) => {
    setTimeout(() => {
      if (this.destroyed) return;
      const duration = 1400;
      const frames = 60;
      const interval = duration / frames;
      let frame = 0;

      const timer = setInterval(() => {
        if (this.destroyed) { clearInterval(timer); return; }
        frame++;
        const progress = Math.min(frame / frames, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const val = Math.round(ease * stat.val);

        stat.display =
          (val >= 1000 ? (val / 1000).toFixed(0) + 'k' : String(val)) +
          stat.suffix;
        this.cdr.markForCheck();

        if (progress >= 1) clearInterval(timer);
      }, interval);

    }, idx * 150);
  });
}
}