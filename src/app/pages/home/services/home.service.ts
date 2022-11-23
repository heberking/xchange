import { Injectable } from '@angular/core';
import { RestService } from '@core/services/rest.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private ENDPOINT_SYMBOLS: string = environment.ENDPOINT_SYMBOLS;
  private ENDPOINT_CONVERT: string = environment.ENDPOINT_CONVERT;

  constructor(private restService: RestService) {}

  getSymbols(): Observable<string[]> {
    return this.restService.get<string[]>(this.ENDPOINT_SYMBOLS);
  }

  convert(): Observable<any> {
    return this.restService.get<any>(this.ENDPOINT_CONVERT);
  }
}
