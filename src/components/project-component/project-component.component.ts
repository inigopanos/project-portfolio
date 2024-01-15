import { Component } from '@angular/core';
import { ProjectI } from '../../app/interface/interfaces';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.css'
})
export class ProjectComponent {
  projects: Array<ProjectI> = []

  constructor() {}

  ngOnInit() {
    this.projects = [
      {
        title: '¡Vaya ruina!',
        image: '/assets/images/columna.png',
        description: 'MEVN stack project, in which you can create, update, read and delete ruins, as well as register and login as users. Tested on backend using Jest.',
        link: 'https://vaya-ruina.netlify.app',
        skills: ['Vue.js', 'Web Design', 'Typescript', 'Node.js', 'MongoDB', 'Jest'],
        githubFrontend: 'https://github.com/inigopanos/Inigo-Panos_Front-Final-Project-202201-MAD',
        githubBackend: 'https://github.com/inigopanos/Inigo-Panos_Back-Final-Project-202201-MAD',
      },
      {
        title: 'Albums',
        image: '/assets/images/columna.png',
        description: 'MEAN stack project, in which you can create, update, read and delete albums.',
        link:'holahola',
        skills: ['Angular', 'Node.js', 'Typescript', 'Node.js', 'MongoDB']
      }
    ]
   }
}
