import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { DynamicContentIframeConfig } from '../../models/DynamicContentIframeConfig';
import { FrameTime } from '../../models/FrameTime';

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
    setInterval(this.intervalCheck.bind(this), this.config.interval);
  }

  intervalCheck() {

    const curTime = FrameTime.getFrameTime(new Date());

    const curFrame = this.config.getFrame(curTime);

    if (curFrame) {
      const newURL = curFrame.getURL();

      if (newURL !== this.currentURL) {
        this.currentURL = newURL;
        this.changeDetectorRef.markForCheck();
        console.log('Changed URL to: ' + this.currentURL);
      } else {
        console.log('Same url');
      }
    } else {
      console.log('No frame to display');
    }
  }

}
