/**
 * List all the courses.
 * 
 */
angular.module('settings-courses', [
    'rjServices',
    'resources.course'

]);

angular.module('settings-courses').controller('SaveController', SaveController);
angular.module('settings-courses').controller('ListController', ListController);

function ListController($scope, $mdDialog, $mdMedia, CourseFactory, ConfirmFactory, ModalFactory) {

    $scope.getData = getData;
    $scope.remove = remove;
    $scope.CreateForm = CreateForm;
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
            });
    }


    function CreateForm($event, dataModel) {
        var templateUrl = 'sis/src/app/settings/courses/form.tpl.html',
            contrl = SaveController,
            data = {
                dataModel: dataModel
            };

        if (dataModel) {
            data.title = "Update Course";
            ModalFactory.showModal($event, contrl, templateUrl, data).then(function() {                
            });

        } else {
            data.title = "Add Course";
            ModalFactory.showModal($event, contrl, templateUrl, data)
                .then(function(response) {                    
                    $scope.getData();
                });

        }
    }
}


function SaveController(data, $scope, $mdDialog, CourseFactory, $mdToast, data) {

    $scope.save = save;
    $scope.cancel = cancel;
    $scope.dataModel = data.dataModel ? data.dataModel : null;

    function save(data) {
        CourseFactory.save(data).then(function(response) {            
            $mdDialog.hide(response);
        });
    }

    function cancel() {
        $mdDialog.cancel();
    }

}