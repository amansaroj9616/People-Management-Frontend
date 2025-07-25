import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../people/people.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people: any[] = [];
  private routerSub: Subscription;
  private peopleSub: Subscription | undefined;

  constructor(private peopleService: PeopleService, private router: Router) {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.refreshPeople();
      }
    });
  }

  ngOnInit() {
    this.refreshPeople();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
    if (this.peopleSub) this.peopleSub.unsubscribe();
  }

  refreshPeople() {
    if (this.peopleSub) this.peopleSub.unsubscribe();
    this.peopleSub = this.peopleService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }

  addPerson() {
    this.router.navigate(['/add']);
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: string) {
    this.router.navigate(['/delete', id]);
  }
}
