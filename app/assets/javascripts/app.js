'use strict'

angular.module( 'helpdesk', 
            [ 
                'ngRoute', 
                'templates',
                'ngActionCable',
                'datatables',
                'angularMoment'
            ] 
        )
// .run(function (ActionCableConfig){
//   ActionCableConfig.debug = true;
// })
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'DashboardController',
      templateUrl: 'dashboard.html'
    })
    .when('/ticket/:id', {
      controller: 'TicketController',
      templateUrl: 'show_ticket.html'
    })
    .when('/new_ticket', {
      controller: 'NewTicketController',
      templateUrl: 'new_ticket.html'
    })
    .when('/all_tickets', {
      controller: 'TicketsListController',
      templateUrl: 'all_tickets.html'
    })
    .when('/archive', {
      controller: 'ArchiveController',
      templateUrl: 'archive.html'
    })
    .when('/reports', {
      controller: 'ReportsController',
      templateUrl: 'reports.html'
    })
    .when('/settings', {
      controller: 'SettingsController',
      templateUrl: 'settings.html'
    })
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: 'profile.html'
    });
  }
]);
