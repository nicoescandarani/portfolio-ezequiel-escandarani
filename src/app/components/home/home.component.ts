import { Observable } from 'rxjs';
import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mode$: Observable<string>;

  constructor(private stateService: StateService) {
    this.mode$ = this.stateService.mode$;
  }

  ngOnInit(): void {
  }

}
