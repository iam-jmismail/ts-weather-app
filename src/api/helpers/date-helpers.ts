/**
 * Get current date in "YYYY-MM-DD"
 */

const getCurrentDate = () => {
  const curr_date = new Date();
  return curr_date.toISOString().split("T")[0];
};

/**
 * Get Current Time in "HH:mm:ss"
 */

const getCurrentTime = () => {
  const curr_date = new Date();
  const hours = curr_date.getHours().toString().padStart(2, "0");
  const minutes = curr_date.getMinutes().toString().padStart(2, "0");
  const seconds = curr_date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

/**
 * Checks if date is valid in "YYYY-MM-DD" Format
 */
const isDateValid = (date_string: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date_string)) {
    return false;
  }
  const date = new Date(date_string);
  if (isNaN(date.getTime())) {
    return false;
  }
  return date.toISOString().slice(0, 10) === date_string;
};

/**
 * Returns boolean based on whether date comes in range between start_date and end_date
 */
const isDateInRange = (date: string, start_date: string, end_date: string) => {
  return (
    new Date(date) >= new Date(start_date) &&
    new Date(date) <= new Date(end_date)
  );
};

/**
 * Returns # of days between 2 dates or NaN if dates are wrong
 */

const getDaysBetween = (start_date: string, end_date: string) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const start = new Date(start_date);
  const end = new Date(end_date);
  const diffDays = Math.round(Math.abs((+start - +end) / oneDay));
  return Number.isNaN(diffDays) ? null : diffDays;
};

/**
 * Returns start of current day
 */
const startOfCurrentDay = (): Date => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return start;
};

/**
 * Returns end of current day
 */
const endOfCurrentDay = (): Date => {
  const now = new Date();
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0,
    0
  );
  return new Date(end.getTime() - 1);
};

/**
 * Returns start of current month
 */

const startOfMonth = (): Date => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  return start;
};

/**
 * Returns end of current month
 */

const endOfMonth = (): Date => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 0, 0, 0, 0);
  return new Date(end.getTime() - 1);
};

/**
 * Get Week of year
 */
const getWeekOfYear = (date: Date) => {
  const weekOfYear = Math.ceil(
    ((+date - +new Date(date.getFullYear(), 0, 1)) / 86400000 + 1) / 7
  );
  return weekOfYear;
};

const getDateSuffix = (day_of_month: number) => {
  if (day_of_month >= 11 && day_of_month <= 13) {
    return "th";
  }
  switch (day_of_month % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

/**
 * Get Timezone offset
 * Eg : +05:30
 */
const getTimezoneOffset = (date: Date) => {
  const offsetMinutes = date.getTimezoneOffset();
  const sign = offsetMinutes < 0 ? "+" : "-";
  const hours = Math.abs(Math.floor(offsetMinutes / 60));
  const minutes = Math.abs(offsetMinutes % 60);
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${sign}${formattedHours}:${formattedMinutes}`;
};
