angular
    .module('helpdesk')
    .controller('UsersController', [
        '$scope',
        'usersFactory',
        function($scope, usersFactory) {

            usersFactory.getAllUsers().then(function(usersList) {
                $scope.allUsers = usersList;
            });

            $scope.showDialog = function() {
                $('#dialog').data('dialog').open();
            };

            $scope.addUser = function() {
                $('#dialog').data('dialog').close();
            };

        }
    ]);