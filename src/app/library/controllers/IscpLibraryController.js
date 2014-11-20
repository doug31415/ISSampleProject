(function(){

  'use strict';

  IscpLibraryController.$inject = [ '$log', '$translate', 'IscpLibraryModel' ];

  function IscpLibraryController( $log, $translate, IscpLibraryModel ){

    $log.debug( 'IscpLibraryController LOADED');

    var self = this;

    self.model = IscpLibraryModel;

    self.translationParams = {
      userName: self.model.getUserName()
    };

    self.translate = function( language ){
      $translate.use( language );
    }

  }


  angular.module('iscPartner.library')
      .controller('IscpLibraryController', IscpLibraryController );

})();
