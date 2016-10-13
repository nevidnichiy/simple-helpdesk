angular
      .module('helpdesk')
      .controller('NewTicketController', NewTicketController);
       
      NewTicketController.$inject = ['$scope','ticketsFactory'];
      
      function NewTicketController ($scope, ticketsFactory) {
        
        $scope.ticketPriority = 1; //default priority is Normal
        $scope.setPriority = function(priority){
          $scope.ticketPriority = priority;
        };
          
        $scope.fileList = [];
        $scope.addFile = function() {
          if($scope.attachment != null) {
            $scope.fileList.push($scope.attachment);
            angular.element(document).find('input[name="attachment"]').next().val('');
          }
        };

        $scope.addTicket = function() {

          var ticket = { ticket:
                          {
                            subject: $scope.ticketSubject, 
                            message: $scope.ticketText,
                            priority: $scope.ticketPriority,
                          },
                        files: $scope.fileList  
                      };
    
        ticketsFactory.createTicket(ticket);    
        $scope.ticketSubject = '';
        $scope.ticketText = '';
        $scope.files = '';
        $scope.ticketPriority = 1; // default Normal
        $scope.setPriority(1); // restore button colors
        $scope.fileList = [];  
        $scope.newTicketForm.$setPristine();
  };
    
}
