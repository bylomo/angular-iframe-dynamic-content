import { Component, OnInit } from '@angular/core';
import { plainToClass } from 'class-transformer';

import { WebPagesHubConfig } from './models/DynamicContentIframeConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private dynamicContentIframeConfig: WebPagesHubConfig;

  ngOnInit() {
    this.dynamicContentIframeConfig = plainToClass(WebPagesHubConfig, {
      id: 'test',
      interval: 1000,
      frames: [
        {
          startTime: { // 09:00
            hour: 23,
            minute: 0,
            second: 0
          },
          endTime: { // 09:30
            hour: 23,
            minute: 26,
            second: 0
          },
          urls: [
            {
              url: 'https://conda.io/docs/',
              nInterval: 5,
              usedInterval: 0
            },
            {
              url: 'http://www.w3school.com.cn/',
              nInterval: 10,
              usedInterval: 0
            }
          ]
        }
      ]
    });
  }

}
