import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

constructor(private http: HttpClient) { }

getNpcDrops() {
    this.http.get('localhost:8081/scrape/abyssal demon').subscribe(result => {

    });
}

}