/**
 * Created by douglasgoodman on 11/18/14.
 */

(function(){
  'use strict';

  IscpLibraryModel.$inject = [ '$log' ];

  function IscpLibraryModel( $log ){

    $log.debug( 'IscpLibraryModel LOADED');

    // ----------------------------
    // class factory
    // ----------------------------

    var model = {

      userName: userName,
      getUserName: getUserName,
      setUserName: setUserName

    };

    return model;

    // ----------------------------
    // function definitions
    // ----------------------------

    // ----------------
    var userName;

    function getUserName( asObj ){
      if( asObj ){
        return userName;
      }
      else{
        return userName.firstName + ' ' + userName.lastName;
      }
    };

    function setUserName( val ){
      userName = val;
    };


  };


  angular.module('iscPartner.library')
      .factory( 'IscpLibraryModel', IscpLibraryModel );

})();