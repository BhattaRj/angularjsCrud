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
    $scope.param = {};
    getData();

    // When page changed from pagination button.
    // Set the currentPage and reload the datalist.
    $scope.pageChanged = function() {
        $scope.param.currentPage = $scope.currentPage;
        $scope.getData($scope.param);
    };



    //Retrive all dataList.         
    function getData(param) {
        $scope.courses = [];
        CourseFactory.getDataList(param).then(function(response) {
            $scope.courses = response.data;
            $scope.totalItems = response.total;
        });
    }

    // Remove the dataItem form the dataList.
    function remove(id, $index, $event) {

        ConfirmFactory.show($event, 'You really want to remove this !!')
            .then(function() {
                CourseFactory.remove(id).then(function(repsonse) {
                    $scope.courses.splice($index, 1);
                });
            });
    }

    // Create form for create and Save.
    function CreateForm($event, dataModel) {
        var templateUrl = 'sis/src/app/settings/courses/form.tpl.html',
            contrl = SaveController,
            data = {
                dataModel: dataModel
            };

        if (dataModel) {
            data.title = "Update Course";
            ModalFactory.showModal($event, contrl, templateUrl, data)
                .then(function() {

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
   // $scope.cancel = cancel;
    $scope.dataModel = data.dataModel ? data.dataModel : null;
    $scope.title = data.title;


    function save(data) {
        CourseFactory.save(data).then(function(response) {
            $mdDialog.hide(response);
        });
    }

    // Close the Matrial Modal box when pressing cancel button.
    // function cancel() {
    //     $mdDialog.cancel();
    // }
}