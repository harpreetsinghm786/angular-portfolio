import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-background',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  eduData = PORTFOLIO_DATA.education;
  achData = PORTFOLIO_DATA.achievements;
}
