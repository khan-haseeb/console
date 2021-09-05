'use strict';

angular.module('maktabAppApp')
  .factory('maktabUser', function ($resource) {
    return $resource('/api/maktabUserLogin/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
