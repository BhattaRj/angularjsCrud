/**
 * List all the courses.
 * 
 */
angular.module('settings-courses-list', ['resources.course']);
angular.module('settings-courses-list').controller('CourseListController', CourseListController);


function CourseListController($scope, $mdDialog, $mdMedia, Course, CourseFactory) {

    $scope.getData = getData;
    $scope.add = add;
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('sm');

    function add(ev) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'sis/src/app/settings/courses/course-add.tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $mdMedia('sm') && $scope.customFullscreen
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });

        $scope.$watch(function() {
            return $mdMedia('sm');
        }, function(sm) {
            $scope.customFullscreen = (sm === true);
        });
    }

    /**
     * Retrive all data for listing..     
     */
    function getData() {
        var promise = CourseFactory.getCourses();
        promise.then(function(data) {
            $scope.courses = data;
        });
    }

    getData();
}



function DialogController($scope, $mdDialog, Course) {

    $scope.save = save;
    $scope.cancel = cancel;

    function save(data) {
        Course.save({}, {
            data
        }, function(response) {

            if (response.success) {
                $mdDialog.cancel();
            }
        }, function(error) {
            if (error.status = 422) {
                console.log('validation errors.');
            }
        });
    }
    function cancel() {
        $mdDialog.cancel();
    }
}