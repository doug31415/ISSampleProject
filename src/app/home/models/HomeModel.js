/**
 * Created by douglasgoodman on 11/18/14.
 */

(function(){
  'use strict';

  HomeModel.$inject = [ '$log', 'RankHelper' ];

  function HomeModel( $log, RankHelper ){

    $log.debug( 'HomeModel LOADED');

    var model = {

      awesomeThings: [],
      rankHelper: RankHelper,

      getAwesomeThings: function(){
        return this.awesomeThings;
      },

      setAwesomeThings: function( things ){
        $log.debug( 'HomeModel.setAwesomeThings');
//        $log.debug( '...things: ' + JSON.stringify( things ));
        this.awesomeThings = things;

        this.rankHelper.rank( this.awesomeThings );
      }
    };

    return model;
  };


  angular.module( 'issampleProject' )
      .factory( 'HomeModel', HomeModel );

})();