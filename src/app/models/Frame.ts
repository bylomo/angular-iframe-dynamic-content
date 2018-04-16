import { Type } from 'class-transformer';

import { FrameTime } from './FrameTime';
import { FrameURL } from './FrameURL';

export class Frame {
    @Type(() => FrameTime)
    startTime: FrameTime;

    @Type(() => FrameTime)
    endTime: FrameTime;

    @Type(() => FrameURL)
    urls: FrameURL[];

    public includeTime(time: FrameTime) {
        // e.g. 09:00, 09:15, 09:29 are all in [09:00, 09:30), but 09:30, 10:15 not.
        if (time.isAfterOrEqual(this.startTime) && time.isBefore(this.endTime)) {
            return true;
        }
        return false;
    }

    public getURL() {
        this.preProcessURLs();
        for (let i = 0; i < this.urls.length; i++) {
            if (this.urls[i].usedInterval < this.urls[i].nInterval) {
                this.urls[i].usedInterval++;
                return this.urls[i].url;
            }
        }
    }

    private preProcessURLs() {
        if (this.isAllIntervalUsed()) {
            this.resetAllIntervalUsed();
        }
    }

    private isAllIntervalUsed() {
        for (let i = 0; i < this.urls.length; i++) {
            if (this.urls[i].usedInterval < this.urls[i].nInterval) {
                return false;
            }
        }
        return true;
    }

    private resetAllIntervalUsed() {
        for (let i = 0; i < this.urls.length; i++) {
            this.urls[i].usedInterval = 0;
        }
    }

}
