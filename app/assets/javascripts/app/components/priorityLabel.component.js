(function() {
  'use strict';

  angular.module('helpdesk')
    .component('priorityLabel', {
      template: '<span class="bold {{$ctrl.priorityLabel.class}}">{{$ctrl.priorityLabel.text}}</span>',
      bindings: {
        priority: '<'
      },
      controller: PriorityLabelController
    });

  function PriorityLabelController() {
    var $ctrl = this;
    var labels = ['Низкий', 'Обычный', 'Высокий'];
    var classes = ['fg-emerald', 'fg-yellow', 'fg-red'];

    $ctrl.$doCheck = function() {
      if ($ctrl.priority !== undefined) {
        $ctrl.priorityLabel = {
          text: labels[$ctrl.priority],
          class: classes[$ctrl.priority]
        };
      }
    };

  }

})();
