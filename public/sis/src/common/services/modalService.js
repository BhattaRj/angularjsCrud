/**
 * --------------------------------------
 * 
 * --------------------------------------
 *
 *
 *
 * 
 */

angular.module('services.modal', ['ngMaterial']);
angular.module('services.modal').factory('ModalFactory', ModalFactory);


function ModalFactory($mdDialog,$mdMedia) {

    var fac = {};
    fac.showModal = showModal;

    function showModal(ev, controller, templateUrl) {
    	
        return $mdDialog.show({
            controller: controller,
            templateUrl: templateUrl,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $mdMedia('sm')
        });
    }
    return fac;
}
