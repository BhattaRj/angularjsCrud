/**
 * List all the courses.
 * 
 */
angular.module('settings-courses', [
    'rjServices',
    'resources.course'

]);

angular.module('settings-courses').controller('AddController', AddController);
angular.module('settings-courses').controller('EditController', EditController);
angular.module('settings-courses').controller('ListController', ListController);

function ListController($scope, $mdDialog, $mdMedia, CourseFactory, ConfirmFactory, ModalFactory) {

    $scope.getData = getData;
    $scope.add = add;
    $scope.remove = remove;
    $scope.edit = edit;
    getData();

    /**
     * Retrive all dataList.     
     */
    function getData() {
        $scope.courses = [];

        CourseFactory.getDataList().then(function(data) {
            $scope.courses = data;
        });
    }

    function remove(id, $index, $event) {

        ConfirmFactory.show($event, 'You really want to remove this !!')
            .then(function() {
                CourseFactory.remove(id).then(function(repsonse) {
                    $scope.courses.splice($index, 1);
                });
            }, function() {

            });
    }

    function edit($event, id) {
        $scope.course = {};
        var templateUrl = 'sis/src/app/settings/courses/course-add.tpl.html';
        contrl = EditController;

        CourseFactory.getDataItem(id).then(function(response) {
            $scope.course = response;
            ModalFactory.showModal($event, contrl, templateUrl).then(function() {
                debugger;
            });
        });
    }

    function add(ev) {
        var templateUrl = 'sis/src/app/settings/courses/course-add.tpl.html',
            contrl = AddController;

        ModalFactory.showModal(ev, contrl, templateUrl)
            .then(function(response) {
                $scope.getData();
            });
    }

}


function AddController($scope, $mdDialog, CourseFactory, $mdToast) {

    $scope.save = save;
    $scope.cancel = cancel;

    function save(data) {
        CourseFactory.save(data).then(function(response) {
            $mdDialog.hide(response);
        });
    }

    function cancel() {
        $mdDialog.cancel();
    }

}


function EditController() {


}