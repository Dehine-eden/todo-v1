//jshint esversion:6

exports.getDate = function(){

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

exports.getDay = function(){

let today = new Date();

let options = {
    weekday: "long",
    
};

return  today.toLocaleDateString("en-US", options);

};
