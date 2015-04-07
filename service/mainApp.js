/**
 * Created by xinpan on 04/06/2015.
 */

var mainApp = angular.module("mainApp", []);

mainApp.value("defaultInputValue", 5);

//mainApp.constants("defaultInputValue", 5);

mainApp.factory("MathService", function () {
    var factory = {};

    factory.add = function (a, b) {
        return a + b;
    }

    factory.subtract = function (a, b) {
        return a - b;
    }

    factory.multi = function (a, b) {
        return a * b;
    }

    factory.divide = function (a, b) {
        return a / b;
    }

    return factory;
});

mainApp.service("CalcService", function () {

    this.square = function (a) {
        return a * a;
    }

    this.sqrt = function (a) {
        return Math.sqrt(a);
    }
});
