/**
 * Created by urethina on 8/5/15.
 */
'use strict';

app.filter('hostnameFromUrl', function () {
  return function (str) {
    var url = document.createElement('a');

    url.href = str;

    return url.hostname;
  };
});
