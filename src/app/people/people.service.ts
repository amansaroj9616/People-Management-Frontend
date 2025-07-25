import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://people-management-backend-2r5c.onrender.com/person';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person);
  }

  updatePerson(id: string, updatedPerson: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedPerson);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
