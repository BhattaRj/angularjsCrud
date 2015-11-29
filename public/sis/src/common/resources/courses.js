/**
 *  Resourse for creates read update delete.
 */
angular.module('resources.course', ['ngResource', 'ngMaterial', 'rjServices']);

angular.module('resources.course').factory('Course', Course);
angular.module('resources.course').factory('CourseFactory', CourseFactory);


function Course(ResourseFactory) {
    return ResourseFactory.makeResource('/course/:id');
}


function CourseFactory(Course, BaseModelFactory) {
    var fac = {};
    fac.getDataList = getDataList;
    fac.getDataItem = getDataItem;
    fac.save = save;
    fac.remove = remove;


    function getDataItem(id) {
        return BaseModelFactory.getDataItem(Course, id);
    }


    function getDataList() {
        return BaseModelFactory.getDataList(Course);
    }


    function save(data) {
        return BaseModelFactory.save(Course, data);
    }


    function remove(id) {
        return BaseModelFactory.remove(Course, id);
    }

    return fac;
}