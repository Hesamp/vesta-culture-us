# [Vesta](https://vestarayanafzar.com) Culture
 
## US Culture

### `UsLocale`

```javascript
export const UsLocale = {
    code: 'en-US',
    lang: 'en',
    country: 'USA',
    countryCode: 'US',
    dir: 'ltr',
    dateSep: '/',
    dateTimeSep: ' ',
    timeSep: ':',
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekDaysShort: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    am_pm: ['am', 'pm'],
    defaultDateFormat: 'Y/m/d',
    defaultDateTimeFormat: 'Y/m/d H:i:s'
};
```

### `UsDate`

```typescript
export class UsDate extends DateTime {
    
}
```