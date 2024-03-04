# DateWorkUtil

DateWorkUtil is a simple utility module for working with dates in JavaScript.

## Installation

You can install DateWorkUtil via npm:

```bash
npm install dateworkutil
```

## Usage

```javascript
const dateWorkUtil = require('dateworkutil');

// Get the current date and time
const currentDate = dateWorkUtil.getCurrentDateTime();
console.log('Current Date:', currentDate);

// Format a date
const formattedDate = dateWorkUtil.formatDate(currentDate);
console.log('Formatted Date:', formattedDate);

// Calculate the difference between two dates
const futureDate = new Date('2024-12-31T23:59:59');
const difference = dateWorkUtil.getDateDifference(futureDate, currentDate);
console.log('Difference in milliseconds:', difference);
```

## API

### getCurrentDateTime()

Returns the current date and time as a JavaScript `Date` object.

### formatDate(date, format)

Formats the given date into the specified format. If no format is provided, it defaults to `YYYY-MM-DD HH:mm:ss`.

- `date`: The date object to format.
- `format`: (Optional) The format string. Default is `YYYY-MM-DD HH:mm:ss`.

### getDateDifference(date1, date2)

Calculates the difference in milliseconds between two date objects.

- `date1`: The first date object.
- `date2`: The second date object.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
