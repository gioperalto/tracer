import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { apis } from "src/environments/environment";

@Injectable()
export class AuthService {
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.client.post<{ access_token: string, expiration: string }>(
      `${apis.tracer.url}/auth/login`, { username: username, password: password }
    ).pipe(
      map(result => {
        localStorage.setItem('access_token', result.access_token);
        localStorage.setItem('expiration', result.expiration);
        return true;
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiration');
  }

  public get loggedIn(): boolean {
    const accessToken = localStorage.getItem('access_token');
    const expiration = localStorage.getItem('expiration');

    if (accessToken !== null && expiration !== null && Date.now() <= new Date(expiration).getTime()) {
      return true;
    }
    
    this.logout();
    return false;
	}
}