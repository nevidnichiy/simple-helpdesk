angular.module('helpdesk')
    .factory('helpersFactory', function() {
        var helpers = {};
        helpers.priority = {
            labels: ['Низкий', 'Обычный', 'Высокий'],
            classes: ['fg-emerald', 'fg-yellow', 'fg-red']
        };
        return helpers;
    });
