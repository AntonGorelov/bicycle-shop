import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SliderService {
  constructor(private _httpClient: HttpClient) { }

  public getSliderContent(): Observable<any> {
    return this._httpClient.get('/api/slider');
  }
}
