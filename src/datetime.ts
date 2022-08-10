import type { NumStr } from "@skylib/functions";
import type { TimeUnit } from "./types";
import { createFacade } from "@skylib/functions";

export const datetime = createFacade<datetime.Facade>("datetime", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace datetime {
  export interface DateTime {
    /**
     * Adds time interval.
     *
     * @param amount - Amount to be added.
     * @param unit - Unit.
     * @returns New instance.
     */
    readonly add: (amount: number, unit: TimeUnit) => DateTime;
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
     * Formats date.
     *
     * @param format - Format.
     * @returns Formatted string.
     */
    readonly format: (format: string) => string;
    /**
     * Returns hours.
     *
     * @returns Hours.
     */
    readonly hours: () => number;
    /**
     * Compares two dates up to day of month.
     *
     * @param date - Date.
     * @returns _True_ if dates are equal, _false_ otherwise.
     */
    // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
    readonly isSameDayOfMonth: (date: DateTime) => boolean;
    /**
     * Compares two dates up to hours.
     *
     * @param date - Date.
     * @returns _True_ if dates are equal, _false_ otherwise.
     */
    readonly isSameHour: (date: DateTime) => boolean;
    /**
     * Compares two dates up to minutes.
     *
     * @param date - Date.
     * @returns _True_ if dates are equal, _false_ otherwise.
     */
    readonly isSameMinute: (date: DateTime) => boolean;
    /**
     * Compares two dates up to month.
     *
     * @param date - Date.
     * @returns _True_ if dates are equal, _false_ otherwise.
     */
    readonly isSameMonth: (date: DateTime) => boolean;
    /**
     * Compares two dates up to year.
     *
     * @param date - Date.
     * @returns _True_ if dates are equal, _false_ otherwise.
     */
    readonly isSameYear: (date: DateTime) => boolean;
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
     * @param day - Day of month.
     * @returns New instance.
     */
    readonly setDayOfMonth: (day: number) => DateTime;
    /**
     * Sets day of week.
     *
     * @param day - Day of week (Sunday = 0, Monday = 1).
     * @param weekStartsOn - Start of week (Sunday = 0, Monday = 1).
     * @returns New instance.
     */
    readonly setDayOfWeek: (day: number, weekStartsOn: 0 | 1) => DateTime;
    /**
     * Sets day of week.
     *
     * @param day - Day of week (Sunday = 0, Monday = 1).
     * @returns New instance.
     */
    // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
    readonly setDayOfWeekLocale: (day: number) => DateTime;
    /**
     * Sets hours.
     *
     * @param hours - Hours.
     * @returns New instance.
     */
    readonly setHours: (hours: number) => DateTime;
    /**
     * Sets minutes.
     *
     * @param minutes - Minutes.
     * @returns New instance.
     */
    readonly setMinutes: (minutes: number) => DateTime;
    /**
     * Sets month (0 = January).
     *
     * @param month - Month.
     * @returns New instance.
     */
    readonly setMonth: (month: number) => DateTime;
    /**
     * Sets date to the start of day.
     *
     * @returns New instance.
     */
    readonly setStartOfDay: () => DateTime;
    /**
     * Sets date to the start of hour.
     *
     * @returns New instance.
     */
    readonly setStartOfHour: () => DateTime;
    /**
     * Sets date to the start of minute.
     *
     * @returns New instance.
     */
    readonly setStartOfMinute: () => DateTime;
    /**
     * Sets date to the start of month.
     *
     * @returns New instance.
     */
    readonly setStartOfMonth: () => DateTime;
    /**
     * Sets date to the start of week.
     *
     * @param weekStartsOn - Start of week (Sunday = 0, Monday = 1).
     * @returns New instance.
     */
    readonly setStartOfWeek: (weekStartsOn: 0 | 1) => DateTime;
    /**
     * Sets date to the start of week.
     *
     * @returns New instance.
     */
    // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
    readonly setStartOfWeekLocale: () => DateTime;
    /**
     * Sets date to the start of year.
     *
     * @returns New instance.
     */
    readonly setStartOfYear: () => DateTime;
    /**
     * Sets year.
     *
     * @param year - Year.
     * @returns New instance.
     */
    readonly setYear: (year: number) => DateTime;
    /**
     * Subtracts time interval.
     *
     * @param amount - Amount to be subtracted.
     * @param unit - Unit.
     * @returns New instance.
     */
    readonly sub: (amount: number, unit: TimeUnit) => DateTime;
    /**
     * Returns date as a Date object.
     *
     * @returns Date object.
     */
    readonly toDate: () => Date;
    /**
     * Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.
     *
     * @returns Formatted string.
     */
    readonly toString: () => string;
    /**
     * Returns date as a number of milliseconds.
     *
     * @returns Number of milliseconds.
     */
    readonly toTime: () => number;
    /**
     * Returns date as a number of seconds.
     *
     * @returns Number of seconds.
     */
    readonly toTimeSec: () => number;
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
     * @param date - Date.
     * @returns DateTime instance.
     */
    readonly create: (date?: Date | DateTime | NumStr) => DateTime;
    /**
     * Returns current date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.
     *
     * @returns Formatted string.
     */
    readonly now: () => string;
    /**
     * Returns current date as a number of milliseconds.
     *
     * @returns Number of milliseconds.
     */
    readonly time: () => number;
    /**
     * Returns current date as a number of seconds.
     *
     * @returns Number of seconds.
     */
    readonly timeSec: () => number;
    /**
     * Validates date string.
     *
     * @param date - Date.
     * @returns _True_ if date is valid, _false_ otherwise.
     */
    readonly validate: (date: string) => boolean;
  }
}
