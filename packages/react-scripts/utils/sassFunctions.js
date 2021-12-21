'use strict';
const sass = require('sass');

module.exports = {
  'encodebase64($string)': str => {
    const buffer = Buffer.from(str.getValue());

    return new sass.types.String(buffer.toString('base64'));
  },
};
