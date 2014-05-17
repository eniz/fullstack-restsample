'use strict';

angular.module('fullstackApp')
  .controller('GoalTableCtrl', function ($scope, $http) {
    $http.get('/api/goalTable').success(function(goalTable) {
      $scope.goalTable = goalTable;
    });
  })
  .controller('AssistTableCtrl', function ($scope, $http) {
    $http.get('/api/assistTable').success(function(assistTable) {
      $scope.assistTable = assistTable;
    });
  })
  .controller('DisciplineTableCtrl', function ($scope, $http) {
    $http.get('/api/disciplineTable').success(function(disciplineTable) {
      $scope.disciplineTable = disciplineTable;
    });
  });
