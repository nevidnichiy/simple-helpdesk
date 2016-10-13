angular.module('helpdesk')
    .factory('departmentsFactory', ['$http',
        function($http) {
            var depFact = {};
            depFact.getAllDepartments = function() {
                return $http.get("/departments")
                    .then(function(response) {
                        return response.data;
                    });
            };

            depFact.createDepartment = function(departmentParams) {
                return $http.post('/departments', departmentParams)
                    .then(function(response) {
                        return response.data;
                    });
            };
            
            depFact.deleteDepartment = function(id) {
                return $http.delete('/departments/' + id)
                    .then(function(response) {
                        return response.data;
                    });                
            }

            return depFact;

        }
    ]);
