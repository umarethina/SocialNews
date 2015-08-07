/**
 * Created by urethina on 8/5/15.
 */

'use strict';

app.factory('Auth', function ($firebaseAuth, $firebaseObject, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    register: function (user) {
      if (user != undefined) {
        console.info("Inside register create user");
        return auth.$createUser({email: user.email, password: user.password});
      }
    },
    createProfile: function (user) {
      var profile = {
        username: user.username,
        md5_hash: user.md5_hash
      }

      var id = (auth.$getAuth('user')).uid.toString();
      var value = [];
      value[id] = profile ;
      return ref.child('profile').set(value);
    },
    login: function (user) {

      if (user != undefined) {
        return auth.$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function (authData) {
          console.log(authData);
        }).catch(function (error) {
          console.log(err);

        });
      }
      {
        console.info("User not logged in yet!!");
      }

    },

    logout: function () {
      auth.$logout();
    },

    signedIn: function () {
      return !!Auth.user.provider;
    },
    user: {}
  };

  $rootScope.$on('login1', function(e, user) {
    console.info("Auth Login called");
    angular.copy(user, Auth.user);
    Auth.user.profile = $firebaseObject(ref.child('profile').child(auth.$getAuth('user').uid));

    console.log(Auth.user);
  });

  $rootScope.$on('logout2', function() {
    console.info("Auth Logout called");
    if(Auth.user && Auth.user.profile) {
      Auth.user.profile.$destroy();
    }
    angular.copy({}, Auth.user);
  });

  return Auth;
});


