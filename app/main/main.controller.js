'use strict';

/**
 * @ngdoc function
 * @name cheRefAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheRefAppApp
 */
angular.module('cheRefAppApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.views = [{
      displayName: 'Home',
      state: 'main'
    }, {
      displayName: 'About',
      state: 'about'
    }, {
      displayName: 'Equations',
      state: 'equations'
    }];
  }]);
