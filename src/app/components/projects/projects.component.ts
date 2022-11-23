import { StateService } from './../../services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Project } from './../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  mode: Observable<string>;

  // ! Add or remove projects.
  projects: Project[] = [
    {
      img: 'assets/portfolio.png',
      title: 'Personal UI UX portfolio',
      platform: 'Behance',
      url: 'https://www.behance.net/gallery/155568261/UI-UX-designer-web-portfolio-design-process',
      technologies: []
    },
    {
      img: 'assets/behance-redesign.png',
      title: 'Behance redesign',
      platform: 'Behance',
      url: 'https://www.behance.net/gallery/140037319/Rediseno-Behance-Caso-de-estudio-UXUI-2022',
      technologies: []
    },
    {
      img: 'assets/dedo-design.png',
      title: 'Dedo design',
      platform: 'Behance',
      url: 'https://www.behance.net/gallery/99856657/DEDO-ejercicio-UXUI',
      technologies: []
    },
    {
      img: 'assets/dedo-design.png',
      title: 'Dedo design',
      platform: 'Behance',
      url: 'https://www.behance.net/gallery/99856657/DEDO-ejercicio-UXUI',
      technologies: []
    }
  ]

  constructor(private stateService: StateService) {
    this.mode = this.stateService.mode$;
  }

  ngOnInit(): void {
  }

}
