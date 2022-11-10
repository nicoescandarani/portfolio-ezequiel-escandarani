import { StateService } from './../../services/state.service';
import { Observable, Subscription } from 'rxjs';
import { Social } from './../../interfaces/social';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  mode!: string;
  subscription!: Subscription;
  openedInfo: boolean = false;
  socials: Social[] = [
    {
      name: 'Behance',
      url: 'https://www.behance.net/eze-escandea38'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/escandarani.stl'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ezequiel-escandarani'
    }
  ]

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    const modeSubscription = this.stateService.mode$.subscribe(mode => {
      const bodyRef = document.querySelector('body');
      this.mode = mode;
      if (mode === 'day') {
        bodyRef?.classList.add('body-day');
      } else {
        bodyRef?.classList.remove('body-day');
      }
    });
    this.subscription = modeSubscription;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeMode() {
    this.stateService.modeValue = this.mode === 'day' ? 'night' : 'day';
  }

  openInfo(): void {
    this.openedInfo = !this.openedInfo;
  }

  get icon(): string {
    return this.mode === 'day' ? 'day' : 'night';
  }
}
