import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 ngOnInit() {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
  }
}
