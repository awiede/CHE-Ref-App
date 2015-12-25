/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('IdealGasLawCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  $scope.gasLawTest = 'Test Gas Law Controller';
}]);
