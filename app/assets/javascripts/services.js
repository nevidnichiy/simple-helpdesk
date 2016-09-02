'use strict'

angular
       .module('helpdesk')
       
       .factory('helpersFactory', function(){
            var helpers = {};
            helpers.priority = {
                labels: ['Низкий','Обычный','Высокий'],
                classes: ['fg-emerald','fg-yellow','fg-red']  
            };
            return helpers;
       })
       
       .factory('ticketsFactory', ['$http','Upload', function($http, Upload){
            var tickets = {};
            
            tickets.getTicket = function(id) {
                return $http.get("/tickets/" + id)
                    .then(function(response) {
                        return response.data;
                    });
            };
            
            tickets.getAllTickets = function() {
                return $http.get("/tickets")
                    .then(function(response) {
                        return response.data;
                    });
            };
            
//            tickets.createTicket = function(ticketParams, attachments){
            tickets.createTicket = function(ticketParams) {
                var file, options, ref;
                var names = [];
                file = (ref = ticketParams.files) != null ? ref : [];
                for (var i = 0; i < ticketParams.files.length; ++i) 
                names.push(ticketParams.files[i].name);
                options = {
                      url: '/tickets',
                      method: 'POST',
                      file: ticketParams.files,
                      file_form_data_name: 'ticket[files]',
                      fields: { ticket: ticketParams.ticket }
                   }
            //};
            return Upload.upload(options);
//           };
//   return tickets;
                //return $http.post('/tickets', ticketParams).success(function(data){});
            };
            
            tickets.updateTicket = function (argument) {};
            
            return tickets;           
       }]);
