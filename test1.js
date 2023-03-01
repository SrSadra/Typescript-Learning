"use strict";
//  const user = {name : "sadra" , lastname : "sr"};
//  console.log(user.namex);
//  let sadra : number = 12; 
exports.__esModule = true;
//  let num : number = 16.33;
function addTwo(val) {
    return val + 2;
}
function toUpper(val) {
    return val.toUpperCase();
}
function logSth(val) {
    console.log("my value is ".concat(val));
}
function logError(val) {
    throw new Error("ay ay ay of of of");
}
var loginPage = function (name, email, age) {
    if (age === void 0) { age = 1; }
};
loginPage("sa", "sa@gmail.com", 2);
loginPage("sa", "sa@gmail.com");
console.log(addTwo(22));
console.log(toUpper("2"));
// const arr = ["hi" , "howare" , "good" , "bad"];
var arr = [1, 2, 133];
arr.map(function (element) {
    return "salam bar ".concat(element);
});
function modifyUser(user) {
    user.name = "asghar";
    return user;
}
var us = modifyUser({ name: "sadra", familystr: "sar", isActive: true });
// console.log(us.name);
var afrika = true;
var myUser = {
    _id: 1333,
    name: "sadra",
    isPaid: true
};
var myUserPremium = {
    _id: 131334,
    name: "akbar",
    isPaid: false,
    creditCard: 241414140345983
};
var temp = {
    myarr: [1, 2, 3]
};
temp.myarr.push(33);
// temp.myarr = [3 , 44 , 13] // we cant do this!!!
// temp.myarr.map((element) : void => {
//     console.log(element);    
// })
var myarr = [];
myarr.push(212);
var superArr = [];
superArr.push({ name: "sadra", familystr: "sar", isActive: true });
// superArr.map((elem) : void => {
//     console.log(elem);
// })
var score = 12;
