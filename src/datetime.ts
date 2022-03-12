import { createFacade } from "@skylib/functions/dist/helpers";

export const datetime = createFacade<Facade>("datetime", {});

export interface DateTime {
  /**
   * Adds time interval.
   *
   * @param amount - Amount to be added.
   * @param unit - Unit.
   * @returns Self.
   */
  readonly add: (amount: number, unit: Unit) => DateTime;
  /**
   * Self-clones.
   *
   * @returns Cloned DateTime instance.
   */
  readonly clone: () => DateTime;
  /**
   * Returns day of month.
   *
   * @returns Day of month.
   */
  readonly dayOfMonth: () => number;
  /**
   * Returns day of week.
   *
   * @returns Day of week (Sunday = 0, Monday = 1).
   */
  readonly dayOfWeek: () => number;
  /**
   * Formats date/time. Extended date-fns notation:
   * - HHHH = hh or HH depending on locale.
   * - HHH = h or H depending on locale.
   * - A = a or empty string depending on locale.
   *
   * @param fmt - Format.
   * @returns - Date/time as formatted string.
   */
  readonly format: (fmt: string) => string;
  /**
   * Returns hours.
   *
   * @returns Hours.
   */
  readonly hours: () => number;
  /**
   * Compares two DateTime instances up to day of month.
   *
   * @param dt - Date/time.
   * @returns _True_ if DateTime instances are equal, _false_ otherwise.
   */
  readonly isSameDayOfMonth: (dt: DateTime) => boolean;
  /**
   * Compares two DateTime instances up to hours.
   *
   * @param dt - Date/time.
   * @returns _True_ if DateTime instances are equal, _false_ otherwise.
   */
  readonly isSameHour: (dt: DateTime) => boolean;
  /**
   * Compares two DateTime instances up to minutes.
   *
   * @param dt - Date/time.
   * @returns _True_ if DateTime instances are equal, _false_ otherwise.
   */
  readonly isSameMinute: (dt: DateTime) => boolean;
  /**
   * Compares two DateTime instances up to month.
   *
   * @param dt - Date/time.
   * @returns _True_ if DateTime instances are equal, _false_ otherwise.
   */
  readonly isSameMonth: (dt: DateTime) => boolean;
  /**
   * Compares two DateTime instances up to year.
   *
   * @param dt - Date/time.
   * @returns _True_ if DateTime instances are equal, _false_ otherwise.
   */
  readonly isSameYear: (dt: DateTime) => boolean;
  /**
   * Returns minutes.
   *
   * @returns Minutes.
   */
  readonly minutes: () => number;
  /**
   * Returns month.
   *
   * @returns Month (0 = January).
   */
  readonly month: () => number;
  /**
   * Sets day of month.
   *
   * @param date - Day of month.
   * @returns Self.
   */
  readonly setDayOfMonth: (date: number) => DateTime;
  /**
   * Sets day of week.
   *
   * @param day - Day of week (Sunday = 0, Monday = 1).
   * @param weekStartsOn - Start of week (Sunday = 0, Monday = 1).
   * @returns Self.
   */
  readonly setDayOfWeek: (day: number, weekStartsOn: 0 | 1) => DateTime;
  /**
   * Sets day of week.
   *
   * @param day - Day of week (Sunday = 0, Monday = 1).
   * @returns Self.
   */
  readonly setDayOfWeekLocale: (day: number) => DateTime;
  /**
   * Sets hours.
   *
   * @param hours - Hours.
   * @returns Self.
   */
  readonly setHours: (hours: number) => DateTime;
  /**
   * Sets minutes.
   *
   * @param minutes - Minutes.
   * @returns Self.
   */
  readonly setMinutes: (minutes: number) => DateTime;
  /**
   * Sets month (0 = January).
   *
   * @param month - Month.
   * @returns Self.
   */
  readonly setMonth: (month: number) => DateTime;
  /**
   * Sets date to start of day.
   *
   * @returns Self.
   */
  readonly setStartOfDay: () => DateTime;
  /**
   * Sets date to start of hour.
   *
   * @returns Self.
   */
  readonly setStartOfHour: () => DateTime;
  /**
   * Sets date to start of month.
   *
   * @returns Self.
   */
  readonly setStartOfMonth: () => DateTime;
  /**
   * Sets date to start of week.
   *
   * @param weekStartsOn - Start of week (Sunday = 0, Monday = 1).
   * @returns Self.
   */
  readonly setStartOfWeek: (weekStartsOn: 0 | 1) => DateTime;
  /**
   * Sets date to start of week.
   *
   * @returns Self.
   */
  readonly setStartOfWeekLocale: () => DateTime;
  /**
   * Sets year.
   *
   * @param year - Year.
   * @returns Self.
   */
  readonly setYear: (year: number) => DateTime;
  /**
   * Subtracts time interval.
   *
   * @param amount - Amount to be subtracted.
   * @param unit - Unit.
   * @returns Self.
   */
  readonly sub: (amount: number, unit: Unit) => DateTime;
  /**
   * Returns date/time as a Date object.
   *
   * @returns Date object.
   */
  readonly toDate: () => Date;
  /**
   * Returns date/time as "yyyy-MM-dd HH:mm:ss" formatted string.
   *
   * @returns Formatted string.
   */
  readonly toString: () => string;
  /**
   * Returns date/time as a number of seconds.
   *
   * @returns Number of seconds.
   */
  readonly toTime: () => number;
  /**
   * Returns year.
   *
   * @returns Year.
   */
  readonly year: () => number;
}

export interface Facade {
  /**
   * Creates DateTime instance.
   *
   * @param dt - Date/time.
   * @returns DateTime instance.
   */
  readonly create: (dt?: Date | DateTime | string) => DateTime;
  /**
   * Returns current date/time as a "yyyy-MM-dd HH:mm:ss" formatted string.
   *
   * @returns Current date/time.
   */
  readonly now: () => string;
  /**
   * Returns current date/time as a number of seconds.
   *
   * @returns Current date/time.
   */
  readonly time: () => number;
  /**
   * Validates date string.
   *
   * @param dt - Date/time.
   * @returns _True_ if date/time is valid, _false_ otherwise.
   */
  readonly validate: (dt: string) => boolean;
}

export type Unit =
  | "day"
  | "days"
  | "hour"
  | "hours"
  | "minute"
  | "minutes"
  | "month"
  | "months"
  | "week"
  | "weeks"
  | "year"
  | "years";
