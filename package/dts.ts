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
