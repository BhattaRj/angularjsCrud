/**
 * Common directive used throughout the application.
 */

angular.module('rjDirective', []);
angular.module('rjDirective').directive('modalCancelButtton', modalCancelButtton);

/**
 * Close the Material's modal box when cancel button clicked.
 * Example :
 * 
 * <md-button class="md-raised md-warn" ng-click="cancel()" modal-cancel-buttton style="margin-right:20px;">Cancel</md-button>
 * 
 */

function modalCancelButtton($mdDialog) {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            scope.cancel = function() {
                $mdDialog.cancel();
            }
        }
    };
}



/**
 * 
 * Example of directive.
 * 
 * eg.
 * 
 * <body ng-controller="MainCtrl">
 * 		<input type="text" ng-model="color" placeholder="Enter a color" />
 *   	<hello-world/>
 * </body>
 * 
 */
angular.module('rjDirective').directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});