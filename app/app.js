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
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
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
    })/*.state('equationTabs', {
      url: '/equationTabs',
      views: {
        'relativity': {templateUrl: 'equations/equations.relativity.view.html'},
        'idealGasLaw': {templateUrl: 'equations/equations.idealGasLaw.view.html'}
      }
    })*/
      /*.state('equations.relativity', {
      url: '/relativity',
      templateUrl: 'equations/equations.relativity.view.html'
    }).state('equations.idealGasLaw', {
      url: '/idealGasLaw',
      templateUrl: 'equations/equations.idealGasLaw.view.html'
    })*/;

    $urlRouterProvider.otherwise('/');
  }]);
