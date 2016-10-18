(function() {
  'use strict';
  angular
    .module('helpdesk')
    .controller('TicketController', TicketController);

  TicketController.$inject = [
    '$routeParams',
    'ticketsFactory'
  ];

  function TicketController($routeParams, ticketsFactory) {

    var $ctrl = this;

    ticketsFactory.getTicket($routeParams.id)
      .then(function(ticket) {
        $ctrl.ticket = ticket;
      });
  }

})();
