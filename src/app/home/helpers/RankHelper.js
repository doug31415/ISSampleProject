/**
 * Created by douglasgoodman on 11/18/14.
 */

(function(){
  'use strict';

  RankHelper.$inject = [ '$log' ];

  function RankHelper( $log ){

    $log.debug( 'RankHelper LOADED');

    var self = this;

    var helper = {

      rank: function( data ){
        $log.debug( 'RankHelper.rank');

        angular.forEach( data, function( thing ){
          thing.rank = Math.random();
        });
      }
    };

    return helper;
  };


  angular.module( 'issampleProject' )
      .factory( 'RankHelper', RankHelper );

})();