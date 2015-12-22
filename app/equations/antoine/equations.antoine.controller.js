/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('AntoineCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  $scope.antoineMessage = 'Test Antoine Message';

  $scope.inputA = 'A';
  $scope.inputB = 'B';
  $scope.inputC = 'C';
  $scope.inputT = 'T';

  $scope.isCollapsed = true;
}]);
