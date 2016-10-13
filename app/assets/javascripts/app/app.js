'use strict'

angular.module( 'helpdesk', 
            [ 
                'ngRoute', 
                'templates',
                'ngActionCable',
                'datatables',
                'angularMoment',
                'ngFileUpload'
            ] 
        )
// .run(function (ActionCableConfig){
//   ActionCableConfig.debug = true;
// })
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'DashboardController as $ctrl',
      templateUrl: 'app/views/dashboard.html'
    })
    .when('/ticket/:id', {
      controller: 'TicketController',
      templateUrl: 'app/views/show_ticket.html'
    })
    .when('/ticket/:id/edit', {
      controller: 'EditTicketController',
      templateUrl: 'app/views/edit_ticket.html'
    })    
    .when('/new_ticket', {
      controller: 'NewTicketController',
      templateUrl: 'app/views/new_ticket.html'
    })
    .when('/all_tickets', {
      controller: 'TicketsListController',
      templateUrl: 'app/views/all_tickets.html'
    })
    .when('/archive', {
      controller: 'ArchiveController',
      templateUrl: 'app/views/archive.html'
    })
    .when('/reports', {
      controller: 'ReportsController',
      templateUrl: 'app/views/reports.html'
    })
    .when('/users', {
      controller: 'UsersController',
      templateUrl: 'app/views/users.html'
    })
    .when('/departments', {
      controller: 'DepartmentsController',
      templateUrl: 'app/views/departments.html'
    })    
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: 'app/views/profile.html'
    });
  }
]);
