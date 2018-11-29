import { DateTime, ILocale } from "@vesta/core";
import { UsLocale } from "./UsLocale";

export class UsDate extends DateTime {
    public locale: ILocale = UsLocale;
    private gregorianDate: Date;

    constructor() {
        super();
        this.gregorianDate = new Date();
    }

    public getDate(): number {
        return this.gregorianDate.getDate();
    }

    public getDay(): number {
        return this.gregorianDate.getDay();
    }

    public getFullYear(): number {
        return this.gregorianDate.getFullYear();
    }

    public getHours(): number {
        return this.gregorianDate.getHours();
    }

    public getMinutes(): number {
        return this.gregorianDate.getMinutes();
    }

    public getMonth(): number {
        return this.gregorianDate.getMonth();
    }

    public getSeconds(): number {
        return this.gregorianDate.getSeconds();
    }

    public getTime(): number {
        return this.gregorianDate.getTime();
    }

    public setDate(date: number) {
        return this.gregorianDate.setDate(date);
    }

    public setFullYear(year: number, month?: number, date?: number) {
        return this.gregorianDate.setFullYear(year, month || this.gregorianDate.getMonth(), date || this.gregorianDate.getDate());
    }

    public setHours(hour: number, minute?: number, second?: number): number {
        return this.gregorianDate.setHours(hour, minute || this.gregorianDate.getMinutes(), second || this.gregorianDate.getSeconds());
    }

    public setMinutes(minute: number, second?: number): number {
        return this.gregorianDate.setMinutes(minute, second || this.gregorianDate.getSeconds());
    }

    public setMonth(month: number, date?: number) {
        return this.gregorianDate.setMonth(month, date || this.gregorianDate.getDate());
    }

    public setSeconds(second: number): number {
        return this.gregorianDate.setSeconds(second);
    }

    public setTime(time: number): number {
        return this.gregorianDate.setTime(time);
    }

    public valueOf(): number {
        return this.gregorianDate.getTime();
    }

    // 0 <= month <= 11
    protected validateLocale(year: number, month: number, day: number): number {
        const date = new Date(year, month, day);
        const timestamp = date.getTime();
        if (isNaN(timestamp)) { return 0; }
        return timestamp;
    }
}
