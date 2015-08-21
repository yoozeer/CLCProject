angular.module('starter.services', [])

.factory('Courses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var courses = [{
    id: 0,
    courseName: 'Profesional development',
    shortDescription: 'You on your way?',
    image: 'images/pd.jpg'
  }, {
    id: 1,
    courseName: 'Profesional development',
    shortDescription: 'You on your way?',
    image: 'images/pd.jpg'
  }, {
    id: 2,
    courseName: 'Andrew Jostlin',
    shortDescription: 'Did you get the ice cream?',
    image: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    courseName: 'Adam Bradleyson',
    shortDescription: 'I should buy a boat',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    courseName: 'Perry Governor',
    shortDescription: 'Look at my mukluks!',
    image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return courses;
    },
    remove: function(course) {
      courses.splice(course.indexOf(course), 1);
    },
    get: function(courseId) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(courseId)) {
          return courses[i];
        }
      }
      return null;
    }
  };
});
