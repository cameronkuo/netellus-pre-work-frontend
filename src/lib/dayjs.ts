import dayjs from 'dayjs';
import localeEN from 'dayjs/locale/en';
import localeAU from 'dayjs/locale/en-au';
import localeZH from 'dayjs/locale/zh-tw';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

declare module 'dayjs' {
  interface Dayjs {
    // eslint-disable-next-line no-unused-vars
    isBetween: (start: ConfigType, end: ConfigType) => boolean;
  }
}

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.extend(function (option, dayjsClass) {
  const oldFormat = dayjsClass.prototype.format;
  dayjsClass.prototype.format = function (args) {
    return this.isValid() ? oldFormat.bind(this)(args ?? 'YYYY/MM/DD') : '';
  };
  dayjsClass.prototype.isBetween = function (start, end) {
    return this.isAfter(start) && this.isBefore(end);
  };
});

dayjs.locale(
  'en',
  {
    ...localeEN,
    relativeTime: localeAU.relativeTime, // "dayjs/locale/en" 的 relativeTime 有 bug
  },
  true,
);

dayjs.locale('zh', localeZH, true);

dayjs.tz.setDefault('Asia/Taipei');

export default dayjs;
