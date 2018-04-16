import { plainToClass } from 'class-transformer';

export class FrameTime {
    hour: number;
    minute: number;
    second: number;

    public static getFrameTime(date: Date) {
        return plainToClass(FrameTime, {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
    }

    public isEqual(time: FrameTime) {
        return this.hour === time.hour &&
            this.minute === time.minute &&
            this.second === time.second;
    }

    public isBefore(time: FrameTime) { // for endTime
        if (this.isEqual(time)) {
            return false;
        }

        if (this.hour < time.hour) {
            return true;
        } else if (this.hour === time.hour) {
            if (this.minute < time.minute) {
                return true;
            } else if (this.minute === time.minute) {
                if (this.second < time.second) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public isAfterOrEqual(time: FrameTime) { // for startTime
        if (this.isEqual(time)) {
            return true;
        }
        return !this.isBefore(time);
    }
}
