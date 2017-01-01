'use strict';

app.controller('sideMenuController', function($rootScope) {

    $rootScope.showAsideNav = false;

    this.toggle = function() {
        $rootScope.showAsideNav = !$rootScope.showAsideNav;
    };

    this.reset = function() {
        $rootScope.showAsideNav = false;
    };

})
.controller('sideMenuDropdownController', function() {

    var closable = false;

    $("#aside-nav .dropdown").on({
        "shown.bs.dropdown": function () {
            closable = false;
        },
        "click": function (event) {
            if($(event.target).hasClass('dropdown-toggle')) {
                closable = true;
            }
        },
        "hide.bs.dropdown": function (event) {
            return closable;
        }
    });
});