import { Type } from 'class-transformer';

import { Frame } from './Frame';
import { FrameTime } from './FrameTime';

export class DynamicContentIframeConfig {
    id: string;

    interval: number;

    @Type(() => Frame)
    frames: Frame[];

    public getFrame(time: FrameTime) {
        for (let i = 0; i < this.frames.length; i++) {
            if (this.frames[i].includeTime(time)) {
                return this.frames[i];
            }
        }
        return null;
    }

}
