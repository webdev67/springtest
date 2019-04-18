import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class AppService {
  constructor(private http: HttpClient) {

  }
  getPerson(): Observable<any> {
    return this.http.get('http://localhost:8080/person');
  }
  postPerson(body): Observable<any> {
    return this.http.post('http://localhost:8080/person', body);
  }
  deletePerson(body): Observable<any> {
    return this.http.post('http://localhost:8080/deletePerson', body);
  }
}
