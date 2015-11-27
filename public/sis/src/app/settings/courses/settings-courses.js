/**
 * List all the courses.
 * 
 */
angular.module('settings-courses-list', [
    'resources.course',
    'services.modal',
    'services.notify'
]);
angular.module('settings-courses-list').controller('CourseListController', CourseListController);


function CourseListController($scope, $mdDialog, $mdMedia, CourseFactory, ModalFactory) {

    $scope.getData = getData;
    $scope.add = add;


    function add(ev) {
        var templateUrl = 'sis/src/app/settings/courses/course-add.tpl.html',
            contrl = DialogController;

        ModalFactory.showModal(ev, contrl, templateUrl)
            .then(function(response) {
                $scope.getData();
            });
    }


    /**
     * Retrive all data for listing..     
     */
    function getData() {
        $scope.courses = [];
        CourseFactory.getDataList().then(function(data) {
            $scope.courses = data;
        });
    }
    getData();

}


function DialogController($scope, $mdDialog, CourseFactory, $mdToast, NotifyFactory) {

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