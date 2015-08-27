angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CoursesCtrl', function($scope, Courses) {
  $scope.courses = Courses.all();
  $scope.remove = function(course) {
    Courses.remove(course);
  }
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses) {
  $scope.course = Courses.get($stateParams.courseId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
