import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  

})
export class AppComponent {
  title = 'automotora';
  isResponsive: boolean = false;

    toggleMenu(): void {
    this.isResponsive = !this.isResponsive;
  }
}
