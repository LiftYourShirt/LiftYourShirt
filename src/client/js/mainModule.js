define([
    'require',
    'mainController'
], function(require, mainController) {
    'use strict';
    angular.module('mainModule', [])
        .controller('mainController', mainController)
        .factory('personGeneratorWSFactory', personGeneratorWSFactory);
});