import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSalaService {
  private ourl: string;
  constructor(private httpClient: HttpClient) {
    this.ourl = environment.curl;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/json',
    }),
  };
  GetSala(): Observable<any> {
    return this.httpClient.get(this.ourl + 'api/sala');
  }

  PostSala(objeto): Observable<any> {
    return this.httpClient.post(
      this.ourl + 'api/sala/guardar',
      JSON.stringify(objeto),
      this.httpOptions
    );
  }

  DeleteSala(id: number): Observable<any> {
    return this.httpClient.delete(this.ourl + `api/sala/eliminar?id=${id}`);
  }

  UpdateSala(objeto): Observable<any> {
    return this.httpClient.put(
      this.ourl + 'api/sala/modificar',
      JSON.stringify(objeto),
      this.httpOptions
    );
  }
}
