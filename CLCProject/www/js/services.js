angular.module('starter.services', [])

.factory('Courses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var courses = [{
    id: 0,
    courseName: 'Profesional development',
    shortDescription: 'You on your way?',
    image: 'img/pd.jpg'
  }, {
    id: 1,
    courseName: 'Software QA Boot camp',
    shortDescription: 'A 10-day course designed to help people with an engineering or IT background dive into the world of Software Quality Assurance',
    image: 'img/software-boothcamp1.png'
  }, {
    id: 2,
    courseName: 'Introduction to Java',
    shortDescription: 'An entry-level course to core Java to get you up and running on 1 of the most widely …',
    image: 'img/java1.png'
  }, {
    id: 3,
    courseName: 'Photoshop Essentials',
    shortDescription: 'An intermediate-level course on Photoshop, this provides participants with a detailed look at the most used and most …',
    image: 'img/photoshop1.png'
  }, {
    id: 4,
    courseName: 'Advanced Web Development Program',
    shortDescription: 'This course includes everything covered in the Web Designing Program, and also adds coverage of PHP and MySQL. …',
    image: 'img/IT21.png'
  }, {
    id: 5,
    courseName: 'Web Designing Program',
    shortDescription: 'The Web Designing course is a mid-duration course designed to provide complete coverage of such technologies as HTML5, …',
    image: 'img/webdesign1.png'
  }, {
    id: 6,
    courseName: 'HTML5',
    shortDescription: 'An introduction course to HTML5, CSS3 and JQuery to get you started on <br> multi-platform and multi-device development Modules/Learning …',
    image: 'img/HTML51.png'
  }
  ];

  return {
    all: function() {
      return courses;
    },
    remove: function(course) {
      courses.splice(courses.indexOf(course), 1);
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
