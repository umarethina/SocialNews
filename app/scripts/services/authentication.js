/**
 * Created by urethina on 8/6/15.
 */

app.factory('Authen', function ($firebaseAuth, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  return $firebaseAuth(ref);
});
