var app = angular.module( 'helpdesk', 
            [ 
                'ngRoute', 
                'templates',
                'ngActionCable',
                'datatables'
            ] 
        );
// app.run(function (ActionCableConfig){
//   ActionCableConfig.debug = true;
// });
app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'DashboardController',
      templateUrl: 'dashboard.html'
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

app.controller('DashboardController', ['$scope','ActionCableChannel','ticketFact', function($scope, ActionCableChannel, ticketFact){
  
  console.log('test');
  //ac
          $scope.inputText = "";
        $scope.myData = [];
        // connect to ActionCable
        var consumer = new ActionCableChannel("ChatChannel", {user: 42, chat: 37});
        var callback = function(message) {
          //$scope.myData.push(message);
          console.log(message)
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
  
    $scope.tickets = ticketFact.allTickets;

    ticketFact.getTickets().then(function(list){
      $scope.tickets = list;
      console.log($scope.tickets);
    })
  
  
    $scope.stats = {
        waiting: 5,
        working: 2,
        total: 3
    }
    
    $scope.lastActions = [
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        {date: '01.01.2015', text: 'Lorem ipsum dolor sit amet.'},
        ]
    
}]);

app.factory('ticketFact', [
'$http',
function($http){
  var factory = {};
  factory.create = function(ticketParams){
    return $http.post('/tickets', ticketParams ).success(function(data){});
  };
  
  factory.getTickets = function () {
    return $http.get("/tickets")
      .then(function(response) {
        return response.data;
      });
  };

  return factory;  
}]);

app.controller('NewTicketController',['$scope','ticketFact', function($scope, ticketFact){
  $scope.ticketPriority = 1; //default priority is Normal
  $scope.setPriority = function(priority){
    $scope.ticketPriority = priority;
  };

  $scope.addTicket = function() {
    console.log('ticket added priority: ' + $scope.ticketPriority);
    var ticket = { ticket:
                    {
                      subject: $scope.ticketSubject, 
                      message: $scope.ticketText
                    }
                  };
    
    ticketFact.create(ticket);    
    $scope.ticketSubject = '';
    $scope.ticketText = '';
    $scope.newTicketForm.$setPristine();
  };
    
}]);

app.controller('ReportsController',['$scope', function($scope){
    
}]);

app.controller('SettingsController',['$scope', function($scope){
    
}]);

app.controller('ProfileController',['$scope', function($scope){
    
}]);
