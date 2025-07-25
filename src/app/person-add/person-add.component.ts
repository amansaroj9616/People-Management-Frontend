import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-person-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-add.component.html'
})
export class PersonAddComponent {
  person: any = { name: '', age: null, gender: '', mobileNumber: '' };
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private peopleService: PeopleService, private router: Router) {}

  add() {
    this.peopleService.addPerson(this.person).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert('Failed to add person: ' + (err.error?.message || err.message))
    });
  }
} 