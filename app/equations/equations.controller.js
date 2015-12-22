/**
 * Created by andre on 20-Dec-15.
 */
angular.module('cheRefAppApp').controller('EquationsCtrl', ['$scope', function($scope) {

  $scope.tabs = [{
    title: 'Antoine Equation',
    equationView: 'antoine'
  }, {
    title: 'Relativity',
    equationView: 'relativity'
  }, {
    title: 'Ideal Gas Law',
    equationView: 'idealGasLaw'
  }];

  $scope.message = 'Equations Controller Message!';
}]);
