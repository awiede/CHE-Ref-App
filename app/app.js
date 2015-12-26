'use strict';

/**
 * @ngdoc overview
 * @name cheRefAppApp
 * @description
 * # cheRefAppApp
 *
 * Main module of the application.
 */
angular
  .module('cheRefAppApp', [
    'ui.router',
    'ui.bootstrap'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: "main/main.view.html",
      controller: 'MainCtrl'
    }).state('about', {
      url: '/about',
      templateUrl: 'about/about.view.html',
      controller: 'AboutCtrl'
    }).state('equations', {
      url: '/equations',
      views: {
        '': {templateUrl: 'equations/equations.view.html', controller: 'EquationsCtrl'},
        'relativity@equations': {templateUrl: 'equations/relativity/equations.relativity.view.html', controller: 'RelativityCtrl'},
        'idealGasLaw@equations': {templateUrl: 'equations/idealGasLaw/equations.idealGasLaw.view.html', controller: 'IdealGasLawCtrl'},
        'antoine@equations': {templateUrl: 'equations/antoine/equations.antoine.view.html', controller: 'AntoineCtrl'}
      },
      controller: 'EquationsCtrl'
    });

    $urlRouterProvider.otherwise('/');
  }]);
