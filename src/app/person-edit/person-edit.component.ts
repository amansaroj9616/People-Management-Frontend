import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people/people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css'
})
export class PersonEditComponent implements OnInit {
  person: any = { name: '', age: null, gender: '', mobileNumber: '' };
  genders: string[] = ['Male', 'Female', 'Other'];
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

  save() {
    this.peopleService.updatePerson(this.id, this.person).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert('Failed to update person: ' + (err.error?.message || err.message))
    });
  }
}
