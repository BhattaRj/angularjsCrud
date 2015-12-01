/**
 *  Resourse for creates read update delete.
 */
angular.module('resources.studentCategory', ['ngResource', 'ngMaterial', 'rjServices']);

angular.module('resources.studentCategory').factory('StudentCategory', StudentCategory);
angular.module('resources.studentCategory').factory('StudentCategoryFactory', StudentCategoryFactory);


function StudentCategory(ResourseFactory) {
    return ResourseFactory.makeResource('/student-category/:id');
}


function StudentCategoryFactory(StudentCategory, BaseModelFactory) {
    var fac = {};
    fac.getDataList = getDataList;
    fac.getDataItem = getDataItem;
    fac.save = save;
    fac.remove = remove;


    function getDataItem(id) {
        return BaseModelFactory.getDataItem(StudentCategory, id);
    }


    function getDataList(param) {
        return BaseModelFactory.getDataList(StudentCategory,param);
    }


    function save(data) {
        return BaseModelFactory.save(StudentCategory, data);
    }


    function remove(id) {
        return BaseModelFactory.remove(StudentCategory, id);
    }

    return fac;
}