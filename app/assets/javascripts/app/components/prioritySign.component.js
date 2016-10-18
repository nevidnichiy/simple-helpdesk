(function(){
  'use strict';
  
  angular.module('helpdesk')
  .component('prioritySign',{
    template: '<span class="mif-stop {{$ctrl.color}}"></span>',
    bindings: {
      priority: '<'
    },
    controller: PrioritySignController
  });
  
  function PrioritySignController() {
    var $ctrl = this;
    $ctrl.color = ['fg-emerald', 'fg-yellow', 'fg-red'][$ctrl.priority];
  }
  
})();