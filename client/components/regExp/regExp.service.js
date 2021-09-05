'use strict';

angular.module('regExp', [])
  .factory('RegExp', function Auth($location) 
  {
    return {
      emailRegExp: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
      phoneRegExp: /^((\+\d{1,3}[- ])?|0)(\d{3})[- ]?(\d{3,4})[- ]?(\d{3,4})$/,
      urlRegExp: /^(http(s)?:\/\/(www\.)?|www\.)\w+([\-\.]{1}\w+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/,
      pwdRegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
    };
  });

