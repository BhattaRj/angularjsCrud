'use strict';
/**
 *
 * Main module of the application.
 * 
 */
angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'settings',
    'ngMaterial',
    'ngResource',
    'rjDirective',
]).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'sis/src/partials/main.html',
                controller: 'MainCtrl',
            })
            .state('main.courses', {
                templateUrl: 'sis/src/app/settings/courses/courses-list.tpl.html',
                url: '/courses',
                controller: 'ListController',
            })
    }
]);

angular.module('app').controller('MainCtrl', ['$scope', function($scope) {

    // Initial parameters for pagination.
    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

}]);