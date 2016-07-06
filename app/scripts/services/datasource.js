'use strict';

/**
 * @ngdoc service
 * @name basigal2App.Datasource
 * @description
 * # Datasource
 * Factory in the basigal2App.
 */
angular.module('basigal2App')
  .factory('DataSource', ['$http',function($http){
       return {
           get: function(fileName,callback){
                $http.get(fileName).
                success(function(data, status) {
                    callback(data);
                });
           }
       };
    }]);
