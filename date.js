//jshint esversion:6

module.exports.getDate = getDate;

function getDate(){

let today = new Date();

let options = {
    weekday: "long",
    month: "long",
    year:"numeric",
    day:"numeric"
    
};

let day = today.toLocaleDateString("en-US", options);

return  today.toLocaleDateString("en-US", options);

};

module.exports.getDay = getDay;

function getDay(){

let today = new Date();

let options = {
    weekday: "long",
    
};

return  today.toLocaleDateString("en-US", options);

};

console.log(module.exports);