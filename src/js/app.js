(function() {
    var app = angular.module('pathfinder', []);

    app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    });
    
    app.controller('WorldController', ['$http', function($http){

        console.log("Inside WorldController");
        var world = this;
        world.cities = [];

        $http.get('../data/cities.json').success(function(data){
            console.log('In the get!');
            world.cities = data;
        });

    }]);

    app.controller('TabController', function(){

        console.log("Inside TabController");

        this.tab = 0;

        this.isSet = function(checkTab){
            return this.tab === checkTab;
        }

        this.setTab = function(setTab){
            this.tab = setTab;
        }

    });

})();
