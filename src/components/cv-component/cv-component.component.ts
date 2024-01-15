import { Component } from '@angular/core';
import { ExperienceI, SkillI } from '../../app/interface/interfaces';

@Component({
  selector: 'app-cv-component',
  standalone: true,
  imports: [],
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css'
})
export class CvComponent {
  experiences: Array<ExperienceI> = [];
  skills: Array<SkillI> = [];

  constructor() {}

  ngOnInit() {
    // Carga la experiencia
    this.experiences = [
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '2020-01-01',
        end: 'Presente',
      },
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '2018-01-01',
        end: '2020-01-01',
      },
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '2018-01-01',
        end: '2020-01-01',
      },
    ];

    // Carga las habilidades
    this.skills = [
      {
        name: 'Angular',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      }
    ];
  }
}
