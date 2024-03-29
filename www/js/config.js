app
.config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
   .state('landing', {
      url: '/landing',
      templateUrl: 'templates/auth/landing.html',
      controller: 'LandingCtrl'
   })
   .state('intro-slider', {
      url: '/intro-slider',
      templateUrl: 'templates/auth/intro-slider.html',
      controller: 'IntroSliderCtrl'
   })

   //State for login
   $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'templates/auth/login.html',
      controller: 'LoginCtrl'
   });

   $stateProvider.state("home", {
      url: '/home',
      templateUrl: 'templates/home/home.html',
      controller: 'HomeCtrl',
      resolve: {
         currentAuth: function(AuthenticationService){
            return AuthenticationService.checkAuthentication();
         }
      }
   });

   // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/landing');
});
