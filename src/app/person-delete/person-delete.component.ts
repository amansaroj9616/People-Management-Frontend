import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-person-delete',
  standalone: true,
  imports: [],
  templateUrl: './person-delete.component.html',
  styleUrl: './person-delete.component.css'
})
export class PersonDeleteComponent implements OnInit {
  person: any = {};
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.peopleService.getPerson(this.id).subscribe({
        next: (data) => {
          this.person = data;
        },
        error: (err) => alert('Failed to fetch person: ' + (err.error?.message || err.message))
      });
    }
  }

  delete() {
    this.peopleService.deletePerson(this.id).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert('Failed to delete person: ' + (err.error?.message || err.message))
    });
  }
}
