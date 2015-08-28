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

.controller('AccountCtrl', function($scope, $http) {

})


.controller('MapController', function($scope, $ionicLoading) {

        var myLatlng = new google.maps.LatLng(-20.259861, 57.484503);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(-20.259861, 57.484503),
                map: map,
                title: "Ceridian Learning Centre"
            });


       // navigator.geolocation.getCurrentPosition(function(pos) {
            //map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            //var myLocation = new google.maps.Marker({
               // position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
               // map: map,
               // title: "My Location"
           // });
       // });
        $scope.map = map;

})
;
