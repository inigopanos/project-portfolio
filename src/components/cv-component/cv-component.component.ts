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

    //TODO añadir descripción
    this.experiences = [
      {
        title: 'Univeristy lecturer, AI on Vidogames',
        company: 'UPNA',
        start: '2023',
        end: '2024',
      },
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '01-04-2023',
        end: '01-10-2023',
      },
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '2022',
        end: '2023',
      },
      {
        title: 'Software developer',
        company: 'UPNA',
        start: '2020',
        end: '2021',
      },
    ];
  }
}
