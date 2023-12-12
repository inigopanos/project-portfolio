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
        title: 'Desarrollador web',
        company: 'Google',
        start: '2020-01-01',
        end: 'Presente'
      },
      {
        title: 'Ingeniero de software',
        company: 'Microsoft',
        start: '2018-01-01',
        end: '2020-01-01'
      }
    ];

    // Carga las habilidades
    this.skills = [
      {
        name: 'Angular',
        level: 'Experto'
      },
      {
        name: 'TypeScript',
        level: 'Experto'
      },
      {
        name: 'HTML',
        level: 'Avanzado'
      },
      {
        name: 'CSS',
        level: 'Avanzado'
      }
    ];
  }
}
