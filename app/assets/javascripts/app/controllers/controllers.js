'use strict';

angular
      .module('helpdesk')
      .controller('EditTicketController', EditTicketController);
      
      EditTicketController.$inject = [
          '$scope',
          '$routeParams',
          '$location',
          'ticketsFactory'
        ];
          
      function EditTicketController ($scope, $routeParams, $location, ticketsFactory){
            ticketsFactory.getTicket($routeParams.id).then(function(ticket){
                $scope.ticket = ticket;
                angular.element(document)
                  .find('button[ng-click="setPriority(' + $scope.ticket.priority + ')"]')
                  .addClass('active');
              });

            $scope.setPriority = function(priority){
              $scope.ticket.priority = priority;
            };
            
            $scope.fileList = [];
            $scope.addFile = function() {
              if($scope.attachment != null) {
                $scope.fileList.push($scope.attachment);
                angular.element(document).find('input[name="attachment"]').next().val('');
              }
            };

            $scope.updateTicket = function() {

              var ticket = { ticket: $scope.ticket,
                             files: $scope.fileList  
                           };
    
              ticketsFactory.updateTicket($scope.ticket.id, ticket);    
              $location.path('/ticket/' + $scope.ticket.id);
          };
    
}

angular
       .module('helpdesk').controller('ReportsController',['$scope', function($scope){
    
}]);

angular
       .module('helpdesk').controller('ProfileController',['$scope', function($scope){
    
}]);

angular
       .module('helpdesk').controller('TicketsListController',['$scope', function($scope){
    
}]);
