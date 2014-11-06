(function(w){
    'use strict';
    var dv;
    //define the project module's name space
    w.ejr =  w.ejr || {};
    //define this module's name space
    dv = w.ejr.dateValidation = {};
    dv.isYearValid = function isYearValid(y){
        return typeof(y) === 'number';
    };
    dv.isMonthValid = function isMonthValid(m){
        if(typeof(m) !== 'number') return false;
        return m >= 1 && m <= 12;
    };
    dv.isLeapYear = function isYearALeapYear(y){
        //If year is not evenly divisible by 4 it isn't a leap year
        if(y % 4) return false;
        //If year is evenly divisible by 4 and is not evenly divisible by 100 it is a leap year
        if(y % 100) return true;
        //If a year is evenly divisible by 4 and it is evenly divisible by 100 and it is evenly divisible by 400 it is a leap year
        return (y % 400 === 0);
    };
    dv.isDayValid = function isDayValid(y, m, d){
        var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //Validate numerics
        if(typeof(d) !== 'number' || d < 1 || d > 31) return false;
        //Validate for a possible 2/29 date
        if(m === 2 && d > 28){
            if(d !== 29) return false;
            if(dv.isLeapYear(y)) return true;
            return false;
        }else{
        //Validate for all other dates
        if(d <= daysInMonths[m - 1] ) return true;
        return false;
        }
    };
    dv.isDateValid = function isDateValid(y, m, d){
        return (dv.isYearValid(y) && dv.isMonthValid(m) && dv.isDayValid(y, m, d));
    };
}(window));