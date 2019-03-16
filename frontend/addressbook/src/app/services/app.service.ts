import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class AppService {
  constructor(private http: HttpClient) {

  }
  getPerson(): Observable<any> {
    return this.http.get('http://localhost:8080/gs-spring-boot-0.1.0/person');
  }
  postPerson(body): Observable<any> {
    return this.http.post('http://localhost:8080/gs-spring-boot-0.1.0/person', body);
  }
  deletePerson(body): Observable<any> {
    return this.http.post('http://localhost:8080/gs-spring-boot-0.1.0/deletePerson', body);
  }
}
