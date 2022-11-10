import { Subscription } from 'rxjs';
import { StateService } from './services/state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  localHostMode: string = localStorage.getItem('mode') || 'day';

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.modeValue = this.localHostMode;
  }
}
