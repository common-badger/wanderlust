'use strict';

angular.module('wanderlustApp')

  .factory('GoExplore', function(){
    //this function activates on ng-click for the button "Go Exploring!"
    return {
      glhf: function(){
        alert('good luck, have fun!');
      }
    };
  })

  .controller('ShowtourCtrl', function ($scope, GoExplore) {

    $scope.glhf = GoExplore.glhf;

    //Temp data for a tour
    $scope.tours = {
      name: 'The Mission Mission',
      author: 'Ash Ketchum',
      length: 'all day',
      description: 'Note all clues hitherto are bounded by the following streets: 16th and 26th and Dolores and one after Balmy (referred to as The Mission). Hint: a majority of the spots lie on or very close to Valencia. The attendees of the scavenger hunt will be referred to as the “Scavengers”. DISCLAIMER: once The Hunt has begun, the use of any smartphone technology for navigational purposes will be frowned upon.',
      spots: {
        1: {
          number: 1,
          info: 'Obtain a wooden sword from a pirate shop',
          points: '10'
        },
        2: {
          number: 2,
          info: 'Find the following graffiti',
          points: '5'
        },
        3: {
          number: 3,
          info: 'Catch Pikachu',
          points: '20'
        }
      }

    };

  });
