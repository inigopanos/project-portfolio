import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'about-me-component',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  
}
