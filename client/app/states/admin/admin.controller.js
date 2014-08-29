'use strict';
(function(){
  var AdminCtrl = function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.destroy = destroy;

    function destroy(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    }
  };

  AdminCtrl
    .$inject = ['$scope', '$http', 'Auth', 'User'];

  angular.module('greenfieldWanderlustApp')
    .controller('AdminCtrl', AdminCtrl);

}).call(this);