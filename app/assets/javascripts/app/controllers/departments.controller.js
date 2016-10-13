'use strict'

angular.module('helpdesk')
    .controller('DepartmentsController', [
        '$scope',
        'departmentsFactory',
        function($scope, departmentsFactory) {

            function getAllDepartments() {
                departmentsFactory.getAllDepartments().then(function(departmentsList) {
                    $scope.departmentsList = departmentsList;
                });
            }

            getAllDepartments();

            $scope.dialog = {};

            $scope.addDepartment = function() {
                $scope.createDialog = true;
                $scope.dialog.title = 'Новое подразделение';
                $scope.dialog.button = 'Создать';
                $('#dialog').data('dialog').open();
                var departmentParams = {
                    department: {
                        name: $scope.departmentName
                    }
                };

                departmentsFactory.createDepartment(departmentParams)
                    .then(function() {
                        getAllDepartments();
                        $.Notify({
                            content: 'Подразделение создано',
                            type: 'success'
                        });                        
                        $scope.departmentName = "";
                        $scope.departmentForm.$setPristine();
                    });
                $('#dialog').data('dialog').close();
            };

            $scope.editDepartment = function(department) {
                $scope.createDialog = false;
                $scope.dialog.title = 'Редактирование';
                $scope.dialog.button = 'Изменить';                
                $scope.departmentName = department.name;
                $('#dialog').data('dialog').open();
            };
            
            $scope.deleteDepartment = function(id) {
                departmentsFactory.deleteDepartment(id)
                    .then(function() {
                        getAllDepartments();
                        $.Notify({
                            content: 'Подразделение удалено',
                            type: 'success'
                        });                        
                    });
            };
        }
    ]);
