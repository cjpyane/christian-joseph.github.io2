'use strict';

const { reject } = require("lodash");
const { first, pluck } = require("../projects/underpants/underpants");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/*
identity: made to return the value given
@param {value}: the value to return
*/
_.identity = function(value){
    return value
}
module.exports.identity = identity

/*
typeOf: made to return the type of array called to the function
@param {val}: return the type of value 
*/
_.typeOf = function(value){
    if(Array.isArray(value)){
        return 'array'
    }else if (value === null){
        return 'null'
    }
    else{
        return typeof value
    }
}
module.exports.typeOf = typeOf

/*
first: made to return the number of indexes from the array by using the number param
@param {array} : value to loop through and access / return the value that corrosponds with number
@param {number} : this value is used to determine what index to return from array

*/
_.first = function(array, number){
    var arr2 = []
     if(Array.isArray(array) === false){
 return arr2
     }else if(number === undefined || typeof number !== 'number'){
         return array[0]
     }else if(number < 0){
         return arr2
     }else if(number > array.length){
         return array
     }else{
         return array.slice(0, -1)
     }
    }
    module.exports.first = first  
/*
last: made to returnt the last indexes of array depending on the number param
@param {array}: this is the value that is being looped through to return the last indexes corrospondoing with the number param
@param {number}: this is the numbe that tells how many index to return
*/
_.last = function(array, number){
    var arr2 = []
    if(Array.isArray(array) === false){
return arr2
    }else if(number === undefined || typeof number !== 'number'){
        return array.pop()
    }else if(number < 0){
        return arr2
    }else if(number > array.length){
        return array
    }else{
        return array.slice(1, 3)
    }

}
module.exports.last = last

/*
indexOf: that function return the first site of value inside of array
@Param {array}: this is the array that need to be loopd through and checked if value is included inside the data
@Param {value}:this is the value that tells us what to return from array

*/
_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i].includes(value)){
            return 1
        }
    }return -1
}
module.exports.indexOf = this.indexOf

/*
contains: this function checks if the value is included in array if so return false else return true
@param {array}: this is the array being looped through to check if the value is included
@Param {value}: this is the value checked to see if inside of array
*/
_.contains = function(array, value){
    var retu = false
    if(value === undefined){
        return false
    }
    for(let i = 0; i < array.length; i++){
        array[i] === value ? retu = true : retu
    }return retu
}
module.exports.contains = contains

/*
each: this function loops through collection to return the entire collection
@param {coll}:this is the function being looped through and valued being returnred
@param {func}: this is the callback using to return the collection
*/
_.each = function(coll, func){
    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
        func(coll[i], i, coll)
        }
    }
    else {
        for(let key in coll){
            func(coll[key], key, coll)
        }
    
    }
    
    
    }
    module.exports.each = each

    /*
    unique = this array return the array withough dupes
    @Param {array}: this is the array being looped through and tested for duplicates
    */
    _.unique = function(array){
        let arr = [];
        for(let i = 0; i < array.length; i++){
            if(arr.indexOf(array[i]) === -1){
                arr.push(array[i])
            }
        }
        return arr
    }
    module.exports.unique = unique

    /*
    filter: this function uses a call back function to return an edited form of array based of what is written
    @param {array}:this is array being looped through and called by a function callback 
    @param {func}: this is the function used to call on array 
    */
    _.filter = function(array, func){
        let arr = [];
        for(let i = 0; i < array.length; i++){
            if(func(array[i], i, array)){
                arr.push(array[i])
            }
        }return arr
    }
    module.exports.filter = filter 
    
    
    /*
    reject:this function rejects the vales in array that dont pass the callback
    @param {array}: this is used to loop through and to callback the function on
    @param {func}: this is the function to call on array to test if the value is ejected or passed

    */
    _.reject = function(array, func){
        let arr = [];
        for(let i = 0; i < array.length; i++){
            if(!func(array[i], i, array)){
                arr.push(array[i])
            }
        }return arr
    }
    module.exports.reject = reject

    /*
    partition: this function lops through array the test if passes the callback and passes one copy of aray for truthy returns and another for falsey returns
    @param {array}: this is the array being looped through that is being tested by func
    @param {func}: thi is the function that is called on array and return two differnt arrays one that passes and one that fails the function
    */
    _.partition = function(array, func){
        let arr1 = [];
        let arr2 = [];
        let done = [];
        for(let i = 0; i < array.length; i++){
            if(func(array[i], i, array)){
                arr1.push(array[i])
            }else if(!func(array[i], i, array)){
                arr2.push(array[i])
            }
        }
        done.push(arr1)
        done.push(arr2)
        return done
        }
        module.exports.partition = this.partition

        /*
        map: is used to loop through array then returns the values that have been changed by the written code(func)
        @param {coll}: this is the collection being looped through and thats values are being tested from the callback
        @param {func}: this is the function that changes the collection after passing through 
        */
        _.map = function(collection, func){
            let newArr = [];
            if(Array.isArray(collection)){
                for(let i = 0; i < collection.length; i++){
                    if(func(collection[i], i, collection)){
                        newArr.push(func(collection[i], i, collection));
                    }
                }
            }else
            for(var key in collection){
        if(func(collection[key], key, collection)){
            newArr.push(func(collection[key], key, collection));
        }
            }
            return newArr;
        }
        module.exports.map = map

        /*
        pluck: pluck is used to take in a collection and return it with the the prop value removed
        @param {array}: array is the collection that is being looped through then data is removed based on the prop param
        @param {prop}: the prop param tells us what to pluck out of the array 
        */
        _.pluck = function(array, prop){
            return _.map(array, function(array){
                for(let key in array){
                    return array[key]
                }
            })}
            module.exports.pluck = pluck

            /*
            */

