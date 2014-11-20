(function(){
  'use strict';

  NavbarCtrl.$inject = [ '$log', 'IscCustomConfigService' ];

  function NavbarCtrl( $log, IscCustomConfigService ){
    $log.debug( 'NavbarCtrl LOADED');

    var self = this;

    self.date = new Date();
    self.tabs = IscCustomConfigService.getMainNavConfig();

  }

  angular.module('issampleProject')
      .controller( 'NavbarCtrl', NavbarCtrl );

})();


