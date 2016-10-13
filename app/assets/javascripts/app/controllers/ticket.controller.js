angular
      .module('helpdesk')
      .controller('TicketController', TicketController);
       
      TicketController.$inject = [
         '$scope',
         '$routeParams',
         'ticketsFactory',
         'helpersFactory'
        ];
        
      function TicketController ($scope, $routeParams, ticketsFactory, helpersFactory){
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
          
          ticketsFactory.getTicket($routeParams.id)
              .then(function(ticket){
                $scope.ticket = ticket;
              });
      }
