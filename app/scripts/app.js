'use strict';

angular.module('fullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/goalTable', {
        templateUrl: 'partials/topLists/goalTable',
        controller: 'GoalTableCtrl'
      })
      .when('/assistTable', {
        templateUrl: 'partials/topLists/assistTable',
        controller: 'AssistTableCtrl'
      })
      .when('/disciplineTable', {
        templateUrl: 'partials/topLists/disciplineTable',
        controller: 'DisciplineTableCtrl'
      })
      .when('/squadTable', {
        templateUrl: 'partials/team/squad',
        controller: 'TeamSquadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });