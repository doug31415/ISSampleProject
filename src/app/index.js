(function(){
  'use strict';

  var app = angular.module('issampleProject',
          ['ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngResource',
            'ui.router',
            'pascalprecht.translate',
            'isc.customConfig',

            // start optional modules
            'iscPartner.library'
          ])

      .config( function( $stateProvider, $urlRouterProvider, $translateProvider ){

        // ----------------------------
        // state management
        // ----------------------------
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'app/home/home.html',
              controller: 'HomeController as homeCtrl',

              resolve: {
                loadConfig: function( IscCustomConfigService ){
                  return IscCustomConfigService.loadConfig();
                },

                // pass in loadConfig, as it blocks these from resolving until the configuration is in place
                awesomeThings: function( HomeDataApi, loadConfig ) {
                  return HomeDataApi.get();
                },

                model: function( awesomeThings, HomeModel, loadConfig ) {
                  return HomeModel.setAwesomeThings( awesomeThings );
                }
              }
            });


        $urlRouterProvider.otherwise('/home');

        // ----------------------------
        // localization
        // ----------------------------
        $translateProvider
            .useStaticFilesLoader({
              prefix: '/locale/',
              suffix: '.json' }) // load local files
            .preferredLanguage('en_US') // load by default
            .fallbackLanguage('en_US'); // if a value is missing, revert to english

      })


  ;
})();

