/**
 * --------------------------------------
 * Material Modal box.
 * --------------------------------------
 * e.g.
 *         var templateUrl = 'sis/src/app/settings/courses/course-add.tpl.html',
 *         	    contrl = AddController;
 *         	    
 *         ModalFactory.showModal(ev, contrl, templateUrl)
 *           .then(function(response) {
 *              $scope.getData();
 *           });
 *           
 */
angular.module('rjServices', ['ngMaterial']);
angular.module('rjServices').factory('ModalFactory', ModalFactory);
angular.module('rjServices').factory('NotifyFactory', NotifyFactory);
angular.module('rjServices').factory('ConfirmFactory', ConfirmFactory);

function ModalFactory($mdDialog, $mdMedia) {

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


/**
 * --------------------------------------
 * Material Notification (Toast)
 * --------------------------------------
 *
 *
 *
 * 
 */
function NotifyFactory($mdToast) {

    var fac = {};
    fac.show = show;

    function show(msg) {

        return $mdToast.show(
            $mdToast.simple()
            .textContent(msg)
            .position('top right')
            .hideDelay(2500)
            //.parent(document.querySelector('#notify')) //-- dom element ot show notification.
        );
    }
    return fac;
}

function ConfirmFactory($mdDialog) {

    var fac = {};
    fac.show = show;

    function show($event,msg) {

        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            //.title('Confirm')
            .textContent(msg)
            .ariaLabel('Lucky day')
            .targetEvent($event)
            .ok('Yes')
            .cancel('No');

        return $mdDialog.show(confirm);

    }
    return fac;
}
