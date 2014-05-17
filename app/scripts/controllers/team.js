'use strict';

angular.module('fullstackApp')
  .controller('TeamSquadCtrl', function ($scope, $http) {
    $http.get('/api/squadTable').success(function(squadTable) {
      $scope.squadTable = squadTable;
    });
  });