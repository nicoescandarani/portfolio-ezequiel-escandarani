import { StateService } from './../../services/state.service';
import { Observable } from 'rxjs';
import { Skill } from './../../interfaces/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  mode$: Observable<string>;

  skills: Skill[] = [
    {
      name: 'Research',
      level: 'Intermediate'
    },
    {
      name: 'UI design',
      level: 'Advanced'
    },
    {
      name: 'Wireframing',
      level: 'Advanced'
    },
    {
      name: 'User testing',
      level: 'Intermediate'
    },
    {
      name: 'Userflow',
      level: 'Advanced'
    }
  ];
  tools: Skill[] = [
    {
      name: 'Figma',
      level: 'Advanced',
      icon: 'figma'
    },
    {
      name: 'Adobe XD',
      level: 'Intermediate',
      icon: 'adobe-xd'
    },
    {
      name: 'HTML',
      level: 'Advanced',
      icon: 'html'
    },
    {
      name: 'CSS',
      level: 'Advanced',
      icon: 'css'
    },
    {
      name: 'Adobe Illustrator',
      level: 'Advanced',
      icon: 'adobe-illustrator'
    },
    {
      name: 'Adobe Photoshop',
      level: 'Advanced',
      icon: 'photoshop'
    },
    {
      name: 'Windows Pack',
      level: 'Advanced',
      icon: 'windows-pack'
    }
  ]
  languajes: Skill[] = [
    {
      name: 'Spanish',
      level: 'Native'
    },
    {
      name: 'English',
      level: 'Advanced'
    }
  ]

  constructor(private stateService: StateService) {
    this.mode$ = this.stateService.mode$;
  }

  ngOnInit(): void {
  }
}
