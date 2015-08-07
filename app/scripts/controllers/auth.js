/**
 * Created by urethina on 8/5/15.
 */
'use strict';

app.controller('AuthCtrl', function ($scope, $rootScope, $location, Auth) {
  if (Auth.signedIn()) {
    $location.path('/');
  }

  $scope.login = function () {
    Auth.login($scope.user).then(function (user) {
      $rootScope.$broadcast('login1', $scope.name);
      $location.path('/');
    });
  };

  $scope.logout = function () {
    Auth.logout($scope.user).then(function (user) {
      $rootScope.$broadcast('logout2', $scope.name);
      $location.path('/');
    });
  };

  $scope.register = function () {
    Auth.register($scope.user).then(function (user) {
      return Auth.login($scope.user).then(function () {
        user.username = $scope.user.username;
        return Auth.createProfile(user);

      }).then(function () {
        $location.path('/');
      });
    }).then(function () {
      $location.path('/')
    });
  };

});
