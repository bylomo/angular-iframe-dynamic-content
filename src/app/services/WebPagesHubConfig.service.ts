import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { plainToClass } from 'class-transformer';

import { WebPagesHubConfig } from '../models/WebPagesHubConfig';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WebPagesHubConfigService {

    constructor(private http: HttpClient) { }

    getConfig(): Observable<WebPagesHubConfig> {
        return this.http.get<WebPagesHubConfig>('config').pipe(
            map(config => plainToClass(WebPagesHubConfig, config))
        );
    }

}
