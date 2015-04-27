(function() {
    var app = angular.module('pathfinder', []);

    app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    });
    
    app.controller('WorldController', ['$http', function($http){
        var world = this;
        world.cities = [];

        $http.get('../data/cities.json').success(function(data){
            world.cities = data;
        });

    }]);

    app.controller('TabController', function(){
        this.tab = 0;

        this.isSet = function(checkTab){
            return this.tab === checkTab;
        }

        this.setTab = function(setTab){
            this.tab = setTab;
        }

    });

})();
