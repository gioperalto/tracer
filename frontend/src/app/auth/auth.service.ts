import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { apiUrl } from "src/environments/environment";

@Injectable()
export class AuthService {
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.client.post<{ access_token: string, expiration: string }>(`${apiUrl}/auth/login`, { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.access_token);
          localStorage.setItem('expiration', result.expiration);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
	}
}