import { Component } from '@angular/core';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.css'
})
export class ProjectComponent {

  title = '¡Vaya ruina!';
  image = '/assets/images/heart.png';
  description = 'Este es un proyecto muy interesante que hice.';
  link = 'https://vaya-ruina.netlify.app';

  constructor() {}

  ngOnInit() { }
}
