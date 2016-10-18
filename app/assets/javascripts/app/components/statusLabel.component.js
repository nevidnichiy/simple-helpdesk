(function() {
"use strict";

angular.module('helpdesk')
.component('statusLabel', {
  template: '<span class="badge {{$ctrl.class}} fg-white">{{$ctrl.label}}</span>',
  bindings: {
    status: '<'
  },
  controller: StatusLabelController
});

function StatusLabelController () {
  var $ctrl = this;

  $ctrl.$doCheck = function () {

    if ($ctrl.status !== undefined) {
      switch ($ctrl.status) {
        case 'inserted':
          $ctrl.class = 'bg-steel';
          $ctrl.label = 'новая';
          break;
        case 'processing':
        	$ctrl.class = 'bg-cyan';
        	$ctrl.label = 'выполняется';
        	break;
        case 'done':
          $ctrl.class = 'bg-green';
          $ctrl.label = 'завершена';
          break;
        case 'reject':
          $ctrl.class = 'bg-darkRed';
          $ctrl.label = 'отклонена';
          break;
        case 'closed':
          $ctrl.class = 'bg-emerald';
          $ctrl.label = 'выполнена';
          break;
      }
    }
  };
}

})();
