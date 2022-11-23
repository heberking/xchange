import { Injectable } from '@angular/core';
import { RestService } from '@core/services/rest.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private ENDPOINT_SYMBOLS: string = environment.ENDPOINT_SYMBOLS;

  constructor(private restService: RestService) {}

  getSymbols(): Observable<string[]> {
    return this.restService.get<string[]>(this.ENDPOINT_SYMBOLS);
  }
}
