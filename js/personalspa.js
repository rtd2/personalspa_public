var personalApp = angular.module('personalApp', ['ngRoute']);

personalApp.config(function ($routeProvider) {
  $routeProvider
    .when('/demo',
      {
        controller: 'homeController',
        templateUrl: './partials/main.html'
      })
    .when('/',
      {
        controller: 'aboutController',
        templateUrl: './partials/about.html'
      })
    .when('/code',
      {
        controller: 'codeController',
        templateUrl: './partials/code.html'
      })
    .otherwise({ redirectTo: '/'});
});

personalApp.controller('codeController', function ($scope) {

    $scope.$on('$viewContentLoaded', function() {
        $(document).foundation();
    });

    $scope.snippets = [
        {
            subject:'JavaScript',
            title:'JS Object Manipulation',
            description:'A demonstration of the extraction, organization, and appending of data from a JavaScript Object.',
            code:'./img/artistjson.png'
        },
        {
            subject:'PHP',
            title:'UserController',
            description:'From my Laravel 4 authentication demo. The registerAction from this particular controller validates input against custom rules, and existing table values. Then, creates a new user in the users table, and redirects to the login view. If the request method is not POST, or the validator fails, the user is redirected to user/register with input and errors.',
            code:'./img/usercontroller.png'
        },
        {
            subject:'JavaScript',
            title:'AngularJS Application',
            description:'Defining the routes and controllers for this application. Initialization of Foundation JavaScript upon loading a new view. Finally, the definition of the snippets array, over which you just now iterated.',
            code:'./img/thispage.png'
        },
        {
            subject:'CSS',
            title:'Custom CSS',
            description:'Some of my custom css rules for this particular application.',
            code:'./img/customcss.png'
        },
        {
            subject:'JavaScript',
            title:'Object Manipulation 2',
            description:'The corresponding object has been logged to your console. This once again demonstrates the use of dot-notation and UnderscoreJS for the extraction of property values. Pluck extracts a list of property values, and map produces a new array, by sending each value of the provided array "through a transformation function."',
            code:'./img/releasejson.png'
        },
        {
            subject:'PHP',
            title:'Album Page',
            description:'From Donation Digital, Release/Album page. A good example of the integration between markup and PHP. At the URL /release/{releaseid}, the release controller prepares arrays of data for the view, corresponding to the particular release details.',
            code:'./img/releasephp.png'
        }

    ];
});

personalApp.controller('homeController', function ($scope) {

    $scope.$on('$viewContentLoaded', function() {
        $(document).foundation();
    });
});

personalApp.controller('aboutController', function ($scope) {
    $scope.$on('$viewContentLoaded', function() {
        $(document).foundation();
    });

    $scope.filters = {title: "Laravel Authentication"};

    $scope.projects = [
        {
            title:'Laravel Authentication',
            description:'An authentication demo using Laravel. Includes registration, signin, profile page, and password recovery.',
            technology: ['LAMP', 'HTML', 'CSS'],
            image: 'img/laravelauthentication.png',
            link: '/personalspa_public/#/code',
            caption: 'Check out of some of the project over in my code samples:'
        },
        {
            title:'Learn the Terminal',
            description:'Learn the Terminal is a terminal simulation in the browser. It started out as a personal project, but developed into a remote collaboration with the goal of introducing non-developer types to the Terminal.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            image: 'img/learntheterminal.png',
            link: 'http://learntheterminal.com'
        },
        {
            title:'Donation Digital',
            description:'Donation Digital is a prototype for a charitable music store. I worked on the design, graphics, Front End, and data integration. It was also a remote collaboration, this time between myself and two other developers.',
            technology: ['LAMP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Underscore', 'GIMP'],
            image: 'img/donationdigital.png',
            link: 'https://drive.google.com/drive/folders/0BwlUQPMECsorb1pPSjR5TUhYX3M?usp=sharing',
            caption: 'More screenshots:'
        },
        {
            title:'Kinetic Athletics',
            description:"An example of a site I designed as a freelancer. This local athletics association needed a central location to provide information to parents and athletes.",
            technology: ['HTML', 'CSS', 'Bootstrap'],
            image: 'img/kineticathletics.png'
        },
        {
            title:'Design Prototype 1',
            description:'A design prototype I made for a personal site.',
            technology: ['HTML', 'CSS', 'Foundation'],
            image: 'img/designprototype.png',
            link: '/personalspa_public/#/demo'
        },
        {
            title:'P2P Multiplayer Game',
            description:'A grid based, tactical space shooter. The concept is to use Github as a repository for games. The game files are cloned, and shared between players in a Bittorrent Sync folder. Each player has their own worksheet into which they issue their commands.',
            technology: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: 'img/p2p.png',
            link: 'https://github.com/rtd2/alt-multi-tactical'
        }
    ];
});
