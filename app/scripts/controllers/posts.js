/**
 * Created by urethina on 8/5/15.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = Post.all;

  $scope.post = {url: 'http://'};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };

});
