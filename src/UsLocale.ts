import { ILocale } from "@vesta/culture";

export const UsLocale: ILocale = {
    code: 'en-US',
    lang: 'en',
    country: 'USA',
    countryCode: 'US',
    phoneCode: 1,
    dir: 'ltr',
    dateSep: '/',
    dateTimeSep: ' ',
    timeSep: ':',
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekDaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    am_pm: ['am', 'pm'],
    defaultDateFormat: 'Y/m/d',
    defaultDateTimeFormat: 'Y/m/d H:i'
};