import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {
  private API_URI = 'https://run.mocky.io/v3/c2bece02-b490-4145-a06b-b4df12648306';

  constructor(private http: HttpClient) {
  }

  public listarInvestimentos(): Observable<any> {
    return this.http.get(this.API_URI);
  }

}
