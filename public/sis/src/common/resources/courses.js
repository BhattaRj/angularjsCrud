/**
 *  Resourse for creates read update delete.
 */
angular.module('resources.course', ['ngResource', 'ngMaterial', 'rjServices']);

angular.module('resources.course').factory('Course', Course);
angular.module('resources.course').factory('CourseFactory', CourseFactory);


function Course($resource) {
    return $resource('/course/:id', {
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


function CourseFactory(Course, $q, $mdToast, NotifyFactory) {

    var fac = {};
    fac.getDataList = getDataList;
    fac.getDataItem = getDataItem;
    fac.save = save;
    fac.remove = remove;


    function getDataItem(id) {
        var deferred = $q.defer();
        Course.get({
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


    function getDataList() {
        var deferred = $q.defer();
        Course.query({}, function(resp) {
                deferred.resolve(resp.data);
            },
            function(err) {
                deferred.reject('err');
            });
        return deferred.promise;
    }


    function save(data) {
        var deferred = $q.defer();
        Course.save({}, {
            data
        }, function(response) {
            if (response.success) {
                NotifyFactory.show('Data added successfully.');
                deferred.resolve(response);
            }
        }, function(error) {
            if (error.status = 422) {
                console.log('validation errors.');
            }
        });
        return deferred.promise;
    }


    function remove(id) {
        var deferred = $q.defer();
        Course.remove({}, {
            id: id
        }, function(response) {
            if (response.success == true) {
                deferred.resolve(response);
                NotifyFactory.show('Records successfully removed !!')

            }
        }, function(response) {
            console.log('error in delete' + error);
        });
        return deferred.promise;
    }
    return fac;
}