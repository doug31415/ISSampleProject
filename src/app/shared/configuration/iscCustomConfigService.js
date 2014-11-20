/**
 * Created by douglasgoodman on 11/19/14.
 */

(function(){
  'use strict';

  IscCustomConfigService.$inject = [ '$log', '$q', '$http' ];

  function IscCustomConfigService( $log, $q, $http ){
    $log.debug( 'IscCustomConfigService LOADED' );

    // ----------------------------
    // class factory
    // ----------------------------

    var service  = {
      // all
      getConfig: getConfig,
      setConfig: setConfig,
      loadConfig: loadConfig,

      // home page
      getMainNavConfig: getMainNavConfig
    };

    return service;

    // ----------------------------
    // functions
    // ----------------------------

    // ----------------------------
    // all configurations

    var config;

    function getConfig(){
      $log.debug( 'IscCustomConfigService.getConfig' );
      $log.debug( '...config ' + JSON.stringify( config ) );
      return config;
    }

    function setConfig( val ){
      $log.debug( 'IscCustomConfigService.setConfig' );
      $log.debug( '...val ' + JSON.stringify( val ) );
      config = val;
      setHomePageConfig();
    }

    function loadConfig(){
      var deferred = $q.defer();
      $http.get( '/app/shared/configuration/configFile.json' ).then(
          function( results ){
            setConfig( results.data );
            deferred.resolve( results.data );
          }
      );

      return deferred.promise;
    }

    // ----------------------------
    // home page configurations

    var homePageConfig;

    function setHomePageConfig(){
      $log.debug( 'IscCustomConfigService.setHomePageConfig' );
      homePageConfig =  config.homePage;
    }

    function getMainNavConfig(){
      return homePageConfig.mainNav;
    }
  }

  // ----------------------------
  // inject
  // ----------------------------

  angular.module( 'isc.customConfig', [])
      .factory( 'IscCustomConfigService', IscCustomConfigService );
})();