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
       
       .factory('ticketsFactory', ['$http', function($http){
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
            
            tickets.createTicket = function(ticketParams){
                return $http.post('/tickets', ticketParams).success(function(data){});
            };
            
            tickets.updateTicket = function (argument) {};
            
            return tickets;           
       }]);
