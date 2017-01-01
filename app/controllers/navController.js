'use strict';

app.controller('navController', function($rootScope) {

    $rootScope.showAsideNav = false;

    this.toggle = function() {
        $rootScope.showAsideNav = !$rootScope.showAsideNav;
    };

});
