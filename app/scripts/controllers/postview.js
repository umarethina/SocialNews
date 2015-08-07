/**
 * Created by urethina on 8/5/15.
 */
'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.get($routeParams.postId);
});
