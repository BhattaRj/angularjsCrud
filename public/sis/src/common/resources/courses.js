/**
 *  Resourse for flat creates read update delte request for flat.
 */
angular.module('resources.course', ['ngResource']);

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



function CourseFactory(Course, $q) {
    var fac = {};
    fac.getCourses = getCourses;

    function getCourses() {
        var deferred = $q.defer();
        Course.query({}, function(resp) {
                deferred.resolve(resp.data);
            },
            function(err) {
                deferred.reject('err');
            });
        return deferred.promise;
    }
    return fac;
}