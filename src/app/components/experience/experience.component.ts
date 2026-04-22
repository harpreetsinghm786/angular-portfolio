import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  data = PORTFOLIO_DATA.experience;
  trackByIndex(index: number) { return index; }
}
