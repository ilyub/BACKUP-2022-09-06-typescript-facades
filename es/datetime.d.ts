import type { NumStr } from "@skylib/functions/es/types/core";
export declare const datetime: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
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
     * Clones self.
     *
     * @returns DateTime instance.
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
     * Formats date.
     *
     * @param fmt - Format.
     * @returns Formatted string.
     */
    readonly format: (fmt: string) => string;
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
     * Sets date to the start of day.
     *
     * @returns Self.
     */
    readonly setStartOfDay: () => DateTime;
    /**
     * Sets date to the start of hour.
     *
     * @returns Self.
     */
    readonly setStartOfHour: () => DateTime;
    /**
     * Sets date to the start of minute.
     *
     * @returns Self.
     */
    readonly setStartOfMinute: () => DateTime;
    /**
     * Sets date to the start of month.
     *
     * @returns Self.
     */
    readonly setStartOfMonth: () => DateTime;
    /**
     * Sets date to the start of week.
     *
     * @param weekStartsOn - Start of week (Sunday = 0, Monday = 1).
     * @returns Self.
     */
    readonly setStartOfWeek: (weekStartsOn: 0 | 1) => DateTime;
    /**
     * Sets date to the start of week.
     *
     * @returns Self.
     */
    readonly setStartOfWeekLocale: () => DateTime;
    /**
     * Sets date to the start of year.
     *
     * @returns Self.
     */
    readonly setStartOfYear: () => DateTime;
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
export declare type Unit = "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "month" | "months" | "week" | "weeks" | "year" | "years";
//# sourceMappingURL=datetime.d.ts.map