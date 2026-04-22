import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  data = PORTFOLIO_DATA.projects;
  trackByIndex(index: number) { return index; }
}