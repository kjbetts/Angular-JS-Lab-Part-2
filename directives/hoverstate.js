angular.module('mouseIssue', []);

function Controller($scope) {
  $scope.things = [{
      item: 'one'
    },
    {
      item: 'two'
    },
    {
      item: 'three'
    }
  ];

  $scope.mouseOverThing = function(thing) {
    $scope.msg = "Mouse Over: " + thing.item;
  }

  $scope.clickThing = function(thing) {
    $scope.msg = "Clicked: " + thing.item;
  }
}
