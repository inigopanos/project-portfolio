import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from '../components/project-component/project-component.component';
import { CvComponent } from '../components/cv-component/cv-component.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { FooterComponentComponent } from '../components/footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProjectComponent, CvComponent, AboutMeComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-portfolio';
}
