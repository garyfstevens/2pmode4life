(function() {
    var app = angular.module('pathfinder', ['ngSanitize']);

    app.filter('html', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);
    
    app.controller('WorldController', ['$http', function($http){
        var world = this;
        world.cities = [];

        $http.get('data/cities.json').success(function(data){
            world.cities = data;
        });

    }]);

    app.controller('SessionController', ['$http', function($http){
        var session = this;
        session.notes = [];

        $http.get('data/chapter1.json').success(function(data){
            session.notes[0] = data;
        });
        $http.get('data/chapter2.json').success(function(data){
            session.notes[1] = data;
        });
        $http.get('data/chapter3.json').success(function(data){
            session.notes[2] = data;
        });
        $http.get('data/chapter4.json').success(function(data){
            session.notes[3] = data;
        });
        $http.get('data/chapter5.json').success(function(data){
            session.notes[4] = data;
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

    app.controller('PartyController', ['$http', function($http){
        var party = this;
        party.members = [];

        $http.get('data/party.json').success(function(data){
            party.members = data;
        });

    }]);

    app.controller('RunelordController', ['$http', function($http){
        var theRunelords = this;
        theRunelords.runelords = [];

        $http.get('data/runelords.json').success(function(data){
            theRunelords.runelords = data;
        });

    }]);

})();
