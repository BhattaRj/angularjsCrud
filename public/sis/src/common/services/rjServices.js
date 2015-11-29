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
angular.module('rjServices').factory('BaseModelFactory', BaseModelFactory);


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

function BaseModelFactory($q, NotifyFactory, $mdToast) {
    var fac = {};
    fac.getDataList = getDataList;
    fac.getDataItem = getDataItem;
    fac.save = save;
    fac.remove = remove;

    function getDataList(rsource) {
        var deferred = $q.defer();
        rsource.query({}, function(resp) {
                deferred.resolve(resp.data);
            },
            function(err) {
                deferred.reject('err');
            });
        return deferred.promise;
    }

    function getDataItem(resource, id) {

        var deferred = $q.defer();
        resource.get({
            id: id
        }, function(response) {
            if (response.success) {
                deferred.resolve(response.data);
            }
        }, function(err) {
            console.log('error occoured !!');
        });
        return deferred.promise;
    }


    function save(resource, data) {
        var deferred = $q.defer();

        if (data.id) {
            resource.update({
                id: data.id,
                data: data
            }, function(response) {
                if (response.success) {
                    NotifyFactory.show('Data successfully updated.');
                    deferred.resolve(response.data);
                }
            }, function(error) {
                if (422 == error.status) {
                    console.log('validation error occoured!!');
                }
            });

        } else {
            resource.save({}, {
                data
            }, function(response) {
                if (response.success) {
                    NotifyFactory.show('Data successfully added.');
                    deferred.resolve(response.data);
                }
            }, function(error) {
                if (error.status = 422) {
                    console.log('validation errors.');
                }
            });
        }

        return deferred.promise;
    }

    function remove(resource, id) {
        var deferred = $q.defer();
        resource.remove({}, {
            id: id
        }, function(response) {
            if (response.success == true) {
                deferred.resolve(response);
                NotifyFactory.show('Data successfully removed.')

            }
        }, function(response) {
            console.log('error in delete' + error);
        });
        return deferred.promise;
    }
    return fac;
}