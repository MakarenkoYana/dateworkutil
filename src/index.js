// dateworkutil.js

const dateworkutil = {
  // Function to get the current date and time
  getCurrentDateTime: function () {
    return new Date();
  },

  // Function to format a date object to a specified format
  formatDate: function (date, format = 'YYYY-MM-DD HH:mm:ss') {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const formattedDate = date.toLocaleString('en-US', options);
    const formattedFormat = format
      .replace('YYYY', formattedDate.slice(6, 10))
      .replace('MM', formattedDate.slice(0, 2))
      .replace('DD', formattedDate.slice(3, 5))
      .replace('HH', formattedDate.slice(11, 13))
      .replace('mm', formattedDate.slice(14, 16))
      .replace('ss', formattedDate.slice(17, 19));

    return formattedFormat;
  },

  // Function to calculate the difference between two dates in milliseconds
  getDateDifference: function (date1, date2) {
    const difference = date1.getTime() - date2.getTime();
    return Math.abs(difference);
  },
};

module.exports = dateworkutil;
