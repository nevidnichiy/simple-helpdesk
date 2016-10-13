'use strict'

angular
       .module('helpdesk')
       
       .factory('usersFactory',['$http',function($http){
           var users = {};
           users.getAllUsers = function(){
             return $http.get("/users")
                    .then(function(response) {
                        return response.data;
                    });
           };
           
           return users;
           
       }])
       

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

            return Upload.upload(options);

            };
            
            tickets.updateTicket = function (ticketId, ticketParams) {
                var file, options, ref;
                var names = [];
                file = (ref = ticketParams.files) != null ? ref : [];
                for (var i = 0; i < ticketParams.files.length; ++i) 
                names.push(ticketParams.files[i].name);
                options = {
                      url: '/tickets/' + ticketId,
                      method: 'PUT',
                      file: ticketParams.files,
                      file_form_data_name: 'ticket[files]',
                      fields: { ticket: ticketParams.ticket }
                   }

            return Upload.upload(options);
            };
            
            return tickets;           
       }]);
