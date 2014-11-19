(function(){
  'use strict';

  angular.module('issampleProject', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'pascalprecht.translate'])

      .config( function( $stateProvider, $urlRouterProvider, $translateProvider ){

        // ----------------------------
        // state management
        // ----------------------------
        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'app/home/home.html',
              controller: 'HomeController as homeCtrl',

              resolve: {
                awesomeThings: function( HomeDataApi ) {
                  return HomeDataApi.get();
                },

                model: function( awesomeThings, HomeModel ) {
                  return HomeModel.setAwesomeThings( awesomeThings );
                }
              }
            });

        $urlRouterProvider.otherwise('/');

        // ----------------------------
        // localization
        // ----------------------------
        $translateProvider.useStaticFilesLoader({
          prefix: '/locale/',
          suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');

//        $translateProvider.useLocalStorage();

      })
  ;
})();

