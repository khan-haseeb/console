'use strict';

angular.module('jsonCSVService', ['detectIEService'])
  .factory('JsonCSVService', function ($window, DetectIEService) {

    var obj = {
      json2csv: function (jsonObj, fileName, options)
      {
        if(!fileName)
          fileName = 'download.csv';

        if(!options)
          options = {quotes: true};
        var csv = Papa.unparse(jsonObj, options);
        console.log(jsonObj);
        console.log(csv);
        if(DetectIEService.isInternetExplorer())
        {
          var IEwindow = window.open();
          IEwindow.document.write('sep=,\r\n' + csv);
          IEwindow.document.close();
          IEwindow.document.execCommand('SaveAs', true, fileName);
          IEwindow.close();
        }
        else
        {
          window.URL = window.URL || window.webkitURL;
          var file = new Blob([csv], {type: 'text/csv;charset=utf-8'});
          var fileURL = window.URL.createObjectURL(file);

          var a = document.createElement("a");
          a.setAttribute('hidden', '');
          a.setAttribute('href', fileURL);
          a.setAttribute('download', fileName);

          a.click();
          window.URL.revokeObjectURL(fileURL);
        }
      },

      csv2json: function (csvFile, options)
      {
        if(!options)
          options = {quotes: true};

        Papa.parse(csvFile, options);
      }
    };

    return obj;
});
