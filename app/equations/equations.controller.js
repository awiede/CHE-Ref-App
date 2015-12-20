/**
 * Created by andre on 20-Dec-15.
 */
angular.module('cheRefAppApp').controller('EquationsCtrl', ['$scope', function($scope) {

  $scope.tabs = [{
    title: 'Relativity',
    equationView: 'relativity'
  }, {
    title: 'Ideal Gas Law',
    equationView: 'idealGasLaw'
  }, {
    title: 'Antoine Equation',
    equationView: 'antoine'
  }];

  $scope.message = 'Equations Controller Message!';
}]);
