/**
 * List all the courses.
 * 
 */
angular.module('settings-studentCategory', [
    'rjServices',
    'resources.studentCategory'
]);
angular.module('settings-studentCategory').controller('SaveStudentCategoryController', SaveStudentCategoryController);
angular.module('settings-studentCategory').controller('StudentCategoryListController', StudentCategoryListController);


function StudentCategoryListController($scope, $mdDialog, $mdMedia, StudentCategoryFactory, ConfirmFactory, ModalFactory) {

    // // Methods for controller.
    $scope.getData = getData;
    $scope.remove = remove;
    $scope.CreateForm = CreateForm;

    // Variables for scope.
    $scope.dataLoaded = false;
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
        StudentCategoryFactory.getDataList(param).then(function(response) {
            $scope.courses = response.data;
            $scope.totalItems = response.total;
            $scope.dataLoaded = true;
        });
    }

    // Remove the dataItem form the dataList.
    function remove(id, $index, $event) {

        ConfirmFactory.show($event, 'You really want to remove this !!')
            .then(function() {
                StudentCategoryFactory.remove(id).then(function(repsonse) {
                    $scope.getData($scope.param);
                    //$scope.courses.splice($index, 1);
                });
            });
    }

    // Create form for create and Save.
    function CreateForm($event, dataModel) {
        debugger;
        var templateUrl = 'sis/src/app/settings/studentCategory/form.tpl.html',
            contrl = SaveStudentCategoryController,
            data = {
                dataModel: dataModel
            };

        if (dataModel) {
            data.mode = "edit";
            ModalFactory.showModal($event, contrl, templateUrl, data)
                .then(function() {

                });
        } else {
            data.mode = "add";
            ModalFactory.showModal($event, contrl, templateUrl, data)
                .then(function(response) {
                    $scope.getData($scope.param);
                });

        }
    }

}



function SaveStudentCategoryController(data, $scope, $mdDialog, StudentCategoryFactory, $mdToast, data) {
    $scope.save = save;
    $scope.dataModel = data.dataModel ? data.dataModel : null;
    $scope.mode = data.mode;

    function save(data) {
        StudentCategoryFactory.save(data).then(function(response) {
            $mdDialog.hide(response);
        });
    }
}