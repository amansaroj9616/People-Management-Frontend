import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'add', component: PersonAddComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'delete/:id', component: PersonDeleteComponent }
];
