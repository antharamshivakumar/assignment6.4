var obj = {
    
    "name"  : "shiva",
    "age" : 50,
    "city" : "bidar",
    "salary" : 50000,
    "state" : "Telangana",
    "Pincode" : 1234567
      
};

for (var key in obj) {

    console.log(key + ":" + obj[key]);
}