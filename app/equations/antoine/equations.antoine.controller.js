/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('AntoineCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  var antoineExpression = math.parse('10 ^ (A  - (B / (T + C)))').compile();

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

    var evalScope = {
      A: $scope.currentHydrocarbon.A,
      B: $scope.currentHydrocarbon.B,
      C: $scope.currentHydrocarbon.C,
      T: $scope.antoineForm.inputT
    };

    $scope.outputP = antoineExpression.eval(evalScope);
    $scope.showResult = true;

    console.log('Antoine Result: ', $scope.outputP);

  };

}]);
