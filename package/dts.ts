/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

const MINUTE_SECONDS = 60;
const HOUR_SECONDS = MINUTE_SECONDS * 60;
const DAY_SECONDS = HOUR_SECONDS * 24;
const WEEK_SECONDS = DAY_SECONDS * 7;
const MONTH_SECONDS = DAY_SECONDS * 30;
const YEAR_SECONDS = DAY_SECONDS * 365;

const DATE_MOUNT = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  "10": "октября",
  "11": "ноября",
  "12": "декабря",
};

/**
 * Вспомогательные функции модуля "dts", сокращение от  "date time second" .
 *
 * @param {object}
 */
export const dts = {
  getHumanDate(at: string) {
    const date = new Date(at);

    // Получаем день, месяц и год
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = date.getFullYear();

    // Формируем строку в формате dd-mm-yyyy
    return `${day} ${DATE_MOUNT[month]} ${year}`;
  },
  getMeasurementDivisors(secondsAgo, secondsDivisor) {
    return Math.floor(secondsAgo / secondsDivisor);
  },
  /**
   *
   * @param {string} date
   *
   * @return {number}
   */
  getSecondsAgo(date: string): number {
    return Math.round((Date.now() - Number(new Date(date))) / 1000);
  },
  /**
   *
   * @param {string} date
   *
   * @return {string}
   */
  getTimeAgoFromNow(date: string) {
    const secondsAgo = Math.round((Date.now() - Number(new Date(date))) / 1000);

    let measurementDivisors;
    let unit = "";

    if (secondsAgo < MINUTE_SECONDS) {
      measurementDivisors = secondsAgo;
      unit = this.pluralize(secondsAgo, "секунда", "секунды", "секунд");
    } else if (secondsAgo < HOUR_SECONDS) {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, MINUTE_SECONDS);
      unit = this.pluralize(measurementDivisors, "минута", "минуты", "минут");
    } else if (secondsAgo < DAY_SECONDS) {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, HOUR_SECONDS);
      unit = this.pluralize(measurementDivisors, "час", "часа", "часов");
    } else if (secondsAgo < WEEK_SECONDS) {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, DAY_SECONDS);
      unit = this.pluralize(measurementDivisors, "день", "дня", "дней");
    } else if (secondsAgo < MONTH_SECONDS) {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, WEEK_SECONDS);
      unit = this.pluralize(measurementDivisors, "неделя", "недели", "недель");
    } else if (secondsAgo < YEAR_SECONDS) {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, MONTH_SECONDS);
      unit = this.pluralize(measurementDivisors, "месяц", "месяца", "месяцев");
    } else {
      measurementDivisors = this.getMeasurementDivisors(secondsAgo, YEAR_SECONDS);
      unit = this.pluralize(measurementDivisors, "год", "года", "лет");
    }

    return `${measurementDivisors} ${unit} назад`;
  },

  pluralize(number, one, few, many) {
    if (number % 10 === 1 && number % 100 !== 11) {
      return one;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return few;
    } else {
      return many;
    }
  },
};

// Takes an ISO time and returns a string representing how
// long ago the date represents.
// prettyDate(time) {
//     let date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "))
//     let diff = (((new Date()).getTime() - date.getTime()) / 1000)
//     let day_diff = Math.floor(diff / 86400);
//
//     console.log('day_diff', day_diff)
//
//     if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31 ) {
//         return;
//     }
//
//     return day_diff == 0 && (
//             diff < 60 && "just now" ||
//             diff < 120 && "1 minute ago" ||
//             diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
//             diff < 7200 && "1 hour ago" ||
//             diff < 86400 && Math.floor( diff / 3600 ) + " hours ago"
//         ) ||
//         day_diff == 1 && "Yesterday" ||
//         day_diff < 7 && day_diff + " days ago" ||
//         day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
// },
//
// formatDates(time) {
//     let date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
//         diff = (((new Date()).getTime() - date.getTime()) / 1000),
//         day_diff = Math.floor(diff / 86400);
//
//     let year = date.getFullYear(),
//         month = date.getMonth()+1,
//         day = date.getDate();
//
//     console.log('day_diff', day_diff)
//
//     if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
//         return (
//             year.toString()+'-'
//             +((month<10) ? '0'+month.toString() : month.toString())+'-'
//             +((day<10) ? '0'+day.toString() : day.toString())
//         );
//     }
//
//
//     let response = (
//         (
//             day_diff == 0 &&
//             (
//                 (diff < 60 && "just now")
//                 || (diff < 120 && "1 minute ago")
//                 || (diff < 3600 && Math.floor(diff / 60) + " minutes ago")
//                 || (diff < 7200 && "1 hour ago")
//                 || (diff < 86400 && Math.floor(diff / 3600) + " hours ago")
//             )
//         )
//         || (day_diff == 1 && "Yesterday")
//         || (day_diff < 7 && day_diff + " days ago")
//         || (day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago")
//     );
//
//
//     return response;
// },
//
//
//
// makeFuzzyTime(date) {
//     // Make a fuzzy time
//     let delta = Math.round((+new Date - date) / 1000);
//
//     let minute = 60,
//         hour = minute * 60,
//         day = hour * 24,
//         week = day * 7;
//
//     let fuzzy;
//
//     if (delta < 30) {
//         fuzzy = 'just then.';
//     } else if (delta < minute) {
//         fuzzy = delta + ' seconds ago.';
//     } else if (delta < 2 * minute) {
//         fuzzy = 'a minute ago.'
//     } else if (delta < hour) {
//         fuzzy = Math.floor(delta / minute) + ' minutes ago.';
//     } else if (Math.floor(delta / hour) == 1) {
//         fuzzy = '1 hour ago.'
//     } else if (delta < day) {
//         fuzzy = Math.floor(delta / hour) + ' hours ago.';
//     } else if (delta < day * 2) {
//         fuzzy = 'yesterday';
//     }
//
//     return fuzzy;
// },
