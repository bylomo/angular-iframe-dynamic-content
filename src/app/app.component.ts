import { Component, OnInit } from '@angular/core';

import { DynamicContentIframeConfig } from './models/DynamicContentIframeConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private dynamicContentIframeConfig: DynamicContentIframeConfig;

  ngOnInit() {
    this.dynamicContentIframeConfig = {
      interval: 5000,
      urls: [
        'https://conda.io/docs/',
        'http://www.w3school.com.cn/',
      ]
    };
  }

}
