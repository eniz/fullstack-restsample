'use strict';

angular.module('fullstackApp')
  .controller('NavbarCtrl', function ($scope, $location) {
	$scope.menus = [
  {
    title: "Home", 
    action: "#", 
    menus: null
  },
  {
    title: "TopLists", 
    action: "#", 
    menus: [
      {
        title: "Goal Table",
        action: "/goalTable"
      },
      {
        title: "Assist Table",
        action: "/assistTable"
      },
      {
        title: "Discipline Table",
        action: "/disciplineTable"
      }
    ]
  },
  {
    title: "Team", 
    action: "/squadTable", 
    menus: null
  },
]
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
