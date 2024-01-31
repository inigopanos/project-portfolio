import { Component } from '@angular/core';
import { ProjectI } from '../../app/interface/interfaces';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';




@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, MatMenuModule],
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
        description: 'MEVN stack project, in which you can create, update, read and delete ruins, as well as register and login as users.' +
  'Tested on backend using Jest. It includes validation and authentication for admin users.',
        link: 'https://vaya-ruina.netlify.app',
        skills: ['Vue.js', 'WeDev', 'Typescript', 'Node.js', 'MongoDB', 'Jest'],
        githubFrontend: 'https://github.com/inigopanos/Inigo-Panos_Front-Final-Project-202201-MAD',
        githubBackend: 'https://github.com/inigopanos/Inigo-Panos_Back-Final-Project-202201-MAD',
      },
      {   
        title: 'Albums',
        image: '/assets/images/album.png',
        description: 'MEAN stack project, in which you can create, update, read and delete albums.  ',
        githubBackend: 'https://github.com/inigopanos/AlbumList',
        githubFrontend: 'https://github.com/inigopanos/AlbumList',
        skills: ['Angular', 'Node.js', 'Typescript', 'Node.js', 'MongoDB']
      }
    ]
   }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
