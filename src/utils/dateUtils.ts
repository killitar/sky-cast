import { weekDayNames } from '../utils/weekDaysNames';
import { monthNames } from '../utils/monthNames';

const zeroFirstFormat = (value: number): string =>
  value < 10 ? `0${value}` : value.toString();

const formatDateTime = (
  timeUnix: number | undefined,
  timezone: number | undefined,
  formatFunction: (date: Date) => string
): string => {
  if (timeUnix === undefined || timezone === undefined) {
    return '';
  }
  const date = new Date((timeUnix + timezone) * 1000);
  return formatFunction(date);
};

export const getWeekDay = (dateText: string) => {
  const date = new Date(dateText);

  return `${weekDayNames[date.getDay()]}`;
};

export const getDate = (dateText: string) => {
  const date = new Date(dateText);

  return `${date.getDate()}`;
};

export const getMonth = (dateText: string) => {
  const date = new Date(dateText);

  return `${monthNames[date.getMonth()]}`;
};

export const getFormattedDate = (
  dateUnix: number | undefined,
  timezone: number | undefined
): string =>
  formatDateTime(dateUnix, timezone, (date) => {
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
  });

export const getTime = (
  timeUnix: number | undefined,
  timezone: number | undefined
): string =>
  formatDateTime(timeUnix, timezone, (date) => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return `${zeroFirstFormat(hours)}:${zeroFirstFormat(minutes)}`;
  });

export const getHours = (
  timeUnix: number | undefined,
  timezone: number | undefined
): string =>
  formatDateTime(timeUnix, timezone, (date) => {
    const hours = date.getUTCHours();
    return zeroFirstFormat(hours);
  });
