import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/portfolio.data';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  data = PORTFOLIO_DATA.skills as Record<string, string[]>;
  objectKeys = Object.keys;

  activeTab: string = '';
  hoveredSkill: string | null = null;

  // drives the line number column — enough lines to cover content
  get lineNumbers(): number[] {
    const count = (this.data[this.activeTab]?.length ?? 0) + 8;
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  ngOnInit() {
    this.activeTab = this.objectKeys(this.data)[0];
  }

  setTab(category: string) {
    this.activeTab = category;
    this.hoveredSkill = null;
  }
}