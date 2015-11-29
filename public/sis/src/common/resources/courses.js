/**
 *  Resourse for creates read update delete.
 */
angular.module('resources.course', ['ngResource', 'ngMaterial', 'rjServices']);

angular.module('resources.course').factory('Course', Course);
angular.module('resources.course').factory('CourseFactory', CourseFactory);


function Course(ResourseFactory) {
    
    return ResourseFactory.makeResource('/course/:id');
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

        if (data.id) {
            Course.update({
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
            Course.save({}, {
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


    function remove(id) {
        var deferred = $q.defer();
        Course.remove({}, {
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