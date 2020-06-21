import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

export const TimeAbsolute = ({
  date,
  seconds, // eslint-disable-line no-unused-vars
  shortDate, // eslint-disable-line no-unused-vars
  dateOnly, // eslint-disable-line no-unused-vars
  utc, // eslint-disable-line no-unused-vars
  longDate, // eslint-disable-line no-unused-vars
  clock24Hours, // eslint-disable-line no-unused-vars
  timeOnly: _timeOnly, // eslint-disable-line no-unused-vars
  ...carriedProps
}) => {
  const format = getFormat(carriedProps);
  return <time {...carriedProps}>{moment(date).format(format)}</time>;
};

TimeAbsolute.propTypes = {
  date: PropTypes.any.isRequired,
  dateOnly: PropTypes.bool,
  timeOnly: PropTypes.bool,
  shortDate: PropTypes.bool,
  longDate: PropTypes.bool,
  seconds: PropTypes.bool,
  clock24Hours: PropTypes.bool
};

const getFormat = ({
  dateOnly,
  timeOnly,
  seconds,
  shortDate,
  longDate,
  clock24Hours
}) => {
  // October 26, 2020
  if (dateOnly) {
    return "LL";
  }

  // 4:57 PM
  if (timeOnly) {
    return "LT";
  }

  if (shortDate) {
    return "MM/DD/YYYY";
  }

  if (clock24Hours) {
    return "D MMMM YYYY HH:mm:ss z";
  }

  if (longDate) {
    return "LLLL";
  }

  // Oct 26, 2020 11:30:30 AM
  if (seconds) {
    return "ll LTS z";
  }

  // Default is Oct 26, 2020 11:30 AM
  return "lll";
};
