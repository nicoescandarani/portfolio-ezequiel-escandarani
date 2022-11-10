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

  projects: Project[] = [
    {
      // img: 'assets/img/1.png',
      title: 'Project 1',
      platform: 'Behance',
      description: 'UI/UX Redisgn and stuff, bla bla bla bla bla bla bla bla bla bla bla bla',
      url: 'https://www.google.com',
      technologies: ['behance', 'instagram', 'linkedin']
    },
    {
      // img: 'assets/img/2.png',
      title: 'Project 2',
      platform: 'Behance',
      description: 'UI/UX Redisgn and stuff, bla bla bla bla bla bla bla bla bla bla bla bla',
      url: 'https://www.google.com',
      technologies: ['behance', 'instagram', 'linkedin']
    },
    {
      // img: 'assets/img/3.png',
      title: 'Project 3',
      platform: 'Behance',
      description: 'UI/UX Redisgn and stuff, bla bla bla bla bla bla bla bla bla bla bla bla',
      url: 'https://www.google.com',
      technologies: ['behance', 'instagram', 'linkedin']
    }
  ]

  constructor(private stateService: StateService) {
    this.mode = this.stateService.mode$;
  }

  ngOnInit(): void {
  }

}
