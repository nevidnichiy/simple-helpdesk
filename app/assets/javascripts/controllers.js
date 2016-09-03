'use strict'

angular
       .module('helpdesk')
       
       .controller('DashboardController', [
            '$scope',
            'ActionCableChannel',
            'ticketsFactory',
            'helpersFactory',
        function($scope, ActionCableChannel, ticketsFactory, helpersFactory){
            //ac
            $scope.inputText = "";
            $scope.myData = [];
            // connect to ActionCable
            var consumer = new ActionCableChannel("ChatChannel", {user: 42, chat: 37});
            var callback = function(message) {
              $.Notify({
                  caption: 'Notify title',
                  content: message.message,
                  type: 'success'
              });
            };
            consumer.subscribe(callback).then(function(){
              // $scope.sendToMyChannel = function(message){
              //   //consumer.send(message);
              // };
              $scope.$on("$destroy", function(){
                consumer.unsubscribe().then(function(){ $scope.sendToMyChannel = undefined; });
              });
            });
      //ac
      
        $scope.statusLabel = {
              inserted: {
                class: 'bg-steel',
                label: 'новая'
              },
    		      processing: "<span class='badge bg-cyan fg-white'>выполняется</span>",
              done: "<span class='badge bg-green fg-white'>завершена</span>",
              reject: "<span class='badge bg-darkRed fg-white'>отклонена</span>",
              closed: "<span class='badge bg-emerald fg-white'>выполнена</span>"
          };
      
        ticketsFactory.getAllTickets().then(function(ticketsList){
          $scope.tickets = ticketsList;
        });
    
        $scope.stats = {
            waiting: 5,
            working: 2,
            total: 3
        };
        
        $scope.lastActions = [
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            ];
        
    }]);

angular
       .module('helpdesk')
       .controller('TicketController', [
            '$scope',
            '$routeParams',
            'ticketsFactory',
            'helpersFactory',
            function($scope, $routeParams, ticketsFactory, helpersFactory){
                $scope.ticket_id = $routeParams.id;
                $scope.priority = helpersFactory.priority;
                $scope.statusLabels = [ 
                  { 
                    status: 'inserted',
                    title: 'новая'
                  },
                  {
                    status: 'processing',
                    title: 'выполняется'
                  },
                  {
                    status: 'done',
                    title: 'завершена'
                  },      
                  {
                    status: 'reject',
                    title: 'отклонена'
                  },
                  {
                    status: 'closed',
                    title: 'выполнена'
                  }      
                ];
                ticketsFactory.getTicket($routeParams.id).then(function(ticket){
                  $scope.ticket = ticket;
                  console.log(ticket);
                });
              }
            ]);

angular
       .module('helpdesk')
       .controller('NewTicketController',['$scope','ticketsFactory', 
          function($scope, ticketsFactory){
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
    
}]);

angular
       .module('helpdesk')
       .controller('EditTicketController',['$scope','ticketsFactory', 
          function($scope, ticketsFactory){
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
    
}]);

angular
       .module('helpdesk').controller('ReportsController',['$scope', function($scope){
    
}]);

angular
       .module('helpdesk').controller('ProfileController',['$scope', function($scope){
    
}]);

angular
       .module('helpdesk').controller('TicketsListController',['$scope', function($scope){
    
}]);
