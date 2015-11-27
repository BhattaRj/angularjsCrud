/**
 *  Resourse for flat creates read update delte request for flat.
 */
angular.module('resources.course', ['ngResource','services.notify']);

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


function CourseFactory(Course, $q, $mdToast,NotifyFactory) {

    var fac = {};
    fac.getDataList = getDataList;
    fac.save = save;

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

    return fac;
}