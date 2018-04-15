import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { DynamicContentIframeConfig } from '../../models/DynamicContentIframeConfig';

@Component({
  selector: 'app-dynamic-content-iframe',
  templateUrl: './dynamic-content-iframe.component.html',
  styleUrls: ['./dynamic-content-iframe.component.css']
})
export class DynamicContentIframeComponent implements OnInit {

  @Input() config: DynamicContentIframeConfig;

  private currentURL: string;

  private index = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.currentURL = this.config.urls[this.index];
    setInterval(this.intervalCheck.bind(this), this.config.interval);
  }

  intervalCheck() {
    this.index++;

    if (this.index >= this.config.urls.length) {
      this.index = 0;
    }

    this.currentURL = this.config.urls[this.index];
    this.changeDetectorRef.markForCheck();
    console.log('Changed URL to: ' + this.currentURL);
  }

}
