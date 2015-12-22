/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('AntoineCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  $scope.antoineMessage = 'Test Antoine Message';

  $scope.antoineForm = {};
  $scope.antoineForm.inputA = null;
  $scope.antoineForm.inputB = null;
  $scope.antoineForm.inputC = null;
  $scope.antoineForm.inputT = null;

  $scope.outputP = null;

  $scope.isCollapsed = true;
  $scope.showResult = false;

  $scope.resetInputs = function() {
    $scope.antoineForm = {};
  }

  $scope.submitAntoine = function () {


    $scope.showResult = true;
  }

}]);
