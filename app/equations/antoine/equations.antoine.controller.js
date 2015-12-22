/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('AntoineCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  $scope.antoineMessage = 'Test Antoine Message';

  $scope.hydrocarbons = [{
    name: 'Water',
    A: 3.55959,
    B: 643.748,
    C: -198.043
  }, {
    name: 'n-Hexane',
    A: 3.45604,
    B: 1044.038,
    C: -53.893
  }];

  $scope.currentHydrocarbon = $scope.hydrocarbons[0];

  $scope.selectHydrocarbon = function(hydrocarbon) {
    $scope.currentHydrocarbon = hydrocarbon;
  }

  $scope.antoineForm = {};
  $scope.antoineForm.inputT = null;

  $scope.outputP = null;

  $scope.isCollapsed = true;
  $scope.showResult = false;

  $scope.resetInputs = function() {
    $scope.antoineForm = {};
    $scope.outputP = null;
    $scope.showResult = false;
  }

  $scope.submitAntoine = function () {
    // \log_{10} (P) = A - \frac{B}{T+C}
    var A = $scope.currentHydrocarbon.A;
    var B = $scope.currentHydrocarbon.B;
    var C = $scope.currentHydrocarbon.C;
    var T = $scope.antoineForm.inputT;

    var numerator = A - ((B) / (T+C));
    $scope.outputP = Math.pow(10, numerator);
    $scope.showResult = true;
  }

}]);
