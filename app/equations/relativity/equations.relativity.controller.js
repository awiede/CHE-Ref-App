/**
 * Created by andre on 22-Dec-15.
 */
angular.module('cheRefAppApp').controller('RelativityCtrl', ['$scope', function($scope) {
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

  $scope.relativityText = 'Relativity';
}]);
