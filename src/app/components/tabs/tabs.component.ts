import { StateService } from './../../services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  mode$: Observable<string>;

  selectedTab: string = 'projects';

  constructor(private stateService: StateService) {
    this.mode$ = this.stateService.mode$;
  }

  ngOnInit(): void {
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
