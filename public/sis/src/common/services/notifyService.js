/**
 * --------------------------------------
 * 
 * --------------------------------------
 *
 *
 *
 * 
 */

angular.module('services.notify', ['ngMaterial']);
angular.module('services.notify').factory('NotifyFactory', NotifyFactory);


function NotifyFactory($mdToast) {

    var fac = {};
    fac.show = show;

    function show(msg) {

        return $mdToast.show(
            $mdToast.simple()
            .textContent(msg)
            .position('top right')
            .hideDelay(2500)
            //.parent(document.querySelector('#notify'))
        );
    }
    return fac;
}