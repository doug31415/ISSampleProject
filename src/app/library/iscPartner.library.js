(function(){
  'use strict';

  angular.module('iscPartner.library', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'pascalprecht.translate', 'isc.customConfig'])

      .config( function( $stateProvider, $urlRouterProvider, $translateProvider ){

        // ----------------------------
        // state management
        // ----------------------------
        $stateProvider
            .state('iscpLibrary', {
              url: '/iscpLibrary',
              templateUrl: 'app/library/templates/iscpLibrary.html',
              controller: 'IscpLibraryController as iscpLibraryCtrl',

              resolve: {
                loadConfig: function( IscCustomConfigService ){
                  return IscCustomConfigService.loadConfig();
                },

                // pass in loadConfig, as it blocks these from resolving until the configuration is in place
                userName: function( loadConfig ) {
                  return {
                    firstName: 'Quienes',
                    lastName: 'Fulano de Tal'
                  }
                },

                model: function( loadConfig, userName, IscpLibraryModel ) {
                  IscpLibraryModel.setUserName( userName );
                  return IscpLibraryModel;
                }
              }
            });

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
