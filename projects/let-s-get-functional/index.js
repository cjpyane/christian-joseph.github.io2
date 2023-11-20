// #!/usr/bin/env node

'use strict';

const pairs = require('underbar/pairs');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./christian-joseph.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
var maleCust = array.filter(function(customers){
    return customers.gender === 'male'
})
return maleCust.length
};

var femaleCount = function(array){
    return array.reduce((count, customers) => {
        if(customers.gender === 'female'){
            return count + 1
        }return count
    }, 0)
};

var oldestCustomer = function(array){
return array.reduce((ageOld, curr) => {
    if(!ageOld || curr.age > ageOld.age){
return curr
    }
    return ageOld

}, null).name
};

var youngestCustomer = function(array){
    return array.reduce((youngAge, curr) => {
        if(!youngAge || curr.age < youngAge.age){
            return curr
        }
        return youngAge
    }, null).name
};

var averageBalance = function(array){
   
   let total = array.reduce((sum, curr) => {
        let num = '';
        for(let i = 0; i < curr.balance.length; i++){
            if(curr.balance[i] !== '$' && curr.balance[i] !== ','){
                num += curr.balance[i]
            }
        }
        return sum += Number(num)
    }, 0);
    return total / array.length
};

var firstLetterCount = (array, letter) => {
    let lowerLet = letter.toLowerCase();
    let firstLetter = array.reduce((acc, customers) => {
        var first = customers.name.charAt(0).toLowerCase();
        if(first === lowerLet){
            return acc + 1
        }
        return acc
    }, 0);
    return firstLetter
};

var friendFirstLetterCount = (array, customer, letter) => {
    return array.reduce((acc, curr) => {
        if(curr.name === customer){
            acc += firstLetterCount(curr.friends, letter)
        }
        return acc
    }, 0)
    
};

var friendsCount = (array, name) => {
   return array.reduce((friends, cust) => {
    if(cust.friends && cust.friends.some(friend => friend.name === name)){
        friends.push(cust.name)
    }
    return friends
   }, [])
};

var topThreeTags = (array) => {
   var tag = array.reduce((acc, curr) => {
    for(let i = 0; i < curr.tags.length; i++){
        if(!acc[curr.tags[i]]){
            acc[curr.tags[i]] = 1
        }else{
            acc[curr.tags[i]]++
        }
    }
    return acc
   }, []);
   var sorted = Object.values(tag).sort();
   var rev = sorted.reverse();
   var topI = Object.values(tag).reduce((acc, curr, index) => {
    if(curr === rev[0] && acc[0] === undefined){
        acc[0] = index;
    }else if(curr === rev[1] && acc[1] === undefined){
        acc[1] = index
    }else if(curr === rev[2] && acc[2] === undefined){
        acc[2] = index
    }
return acc
   }, [])
   var retArr = [];
   retArr[0] = Object.keys(tag)[topI[0]];
   retArr[1] = Object.keys(tag)[topI[1]];
   retArr[2] = Object.keys(tag)[topI[2]];
   return retArr;
};


var genderCount = (array) => {
    return array.reduce((acc, customers) => {
acc[customers.gender] = (acc[customers.gender] || 0) + 1;
return acc
    }, {})
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
