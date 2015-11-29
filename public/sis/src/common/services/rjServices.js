/**
 * --------------------------------------
 * Material Modal box.
 * --------------------------------------
 * e.g.
 *         var templateUrl = 'sis/src/app/settings/courses/course-add.tpl.html',
 *              contrl = AddController;
 *              
 *         ModalFactory.showModal(ev, contrl, templateUrl)
 *           .then(function(response) {
 *              $scope.getData();
 *           });
 *           
 * locals data must be catched in controller with the same name in the locals.
 * 
 */
angular.module('rjServices', ['ngMaterial', 'ngResource']);
angular.module('rjServices').factory('ModalFactory', ModalFactory);
angular.module('rjServices').factory('NotifyFactory', NotifyFactory);
angular.module('rjServices').factory('ConfirmFactory', ConfirmFactory);
angular.module('rjServices').factory('ResourseFactory', ResourseFactory);

function ModalFactory($mdDialog, $mdMedia) {

    var fac = {};
    fac.showModal = showModal;

    function showModal(ev, controller, templateUrl, data) {

        return $mdDialog.show({
            controller: controller,
            templateUrl: templateUrl,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $mdMedia('sm'),

            locals: {
                data: data ? data : null
            }
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

    function show($event, msg) {

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

function ResourseFactory($resource) {

    var fac = {};
    fac.makeResource = makeResource;

    function makeResource(url) {
        return $resource(url, {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                transformResponse: function(data, headerFn) {
                    // Return modified data for the response
                    return JSON.parse(data);
                }
            },
            query: {
                method: 'GET',
                isArray: false,
            }
        });
    }
    return fac;
}