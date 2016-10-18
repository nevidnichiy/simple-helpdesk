(function(){
  
'use strict';

angular
       .module('helpdesk')
       
       .controller('DashboardController', DashboardController);
       
       DashboardController.$inject = [
            'ActionCableChannel',
            'ticketsFactory'
          ];
          
        function DashboardController (ActionCableChannel, ticketsFactory){
          
          var $ctrl = this;
            
            //ac
            $ctrl.inputText = "";
            $ctrl.myData = [];
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
              // $ctrl.sendToMyChannel = function(message){
              //   //consumer.send(message);
              // };
              $ctrl.$on("$destroy", function(){
                consumer.unsubscribe().then(function(){ $ctrl.sendToMyChannel = undefined; });
              });
            });
      //ac
      
        ticketsFactory.getAllTickets().then(function(ticketsList){
          $ctrl.tickets = ticketsList;
        });
    
        $ctrl.stats = {
            waiting: 5,
            working: 2,
            total: 3
        };
        
        $ctrl.lastActions = [
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
            ];
        
    }

})();
