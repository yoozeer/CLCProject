angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CoursesCtrl', function($scope, Chats) {
  $scope.courses = Courses.all();
  $scope.remove = function(chat) {
    Courses.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
