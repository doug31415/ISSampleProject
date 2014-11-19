(function(){

  'use strict';

  HomeController.$inject = [ '$log', '$translate', 'HomeModel' ];

  function HomeController( $log, $translate, HomeModel ){

    $log.debug( 'HomeController LOADED');

    var self = this;

    self.translationParams = {
      userName: 'Fulano de Tal'
    };

    self.model = HomeModel;
    self.awesomeThings = self.model.awesomeThings;

    self.translate = function( language ){
      $translate.use( language );
    }
  }


  angular.module('issampleProject')
      .controller('HomeController', HomeController );

})();
