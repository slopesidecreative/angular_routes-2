var app = angular.module('app',['ngRoute']);
console.log(app);


// ROUTES -----------------------------

app.config(function($routeProvider){
   $routeProvider
   .when('/users',{
      templateUrl: 'partials/customizeUsers.html',
      controller: 'customCtrl as cc'
   })
   .when('/list',{
      templateUrl: 'partials/userList.html',
      controller: 'listCtrl as lc'
   })
   .when('/',{
      templateUrl: '/partials/userList.html',
      controller: 'listCtrl as lc'
   })
   .otherwise({
      redirectTo: '/users'
   });
});


// CONTROLLERS -----------------------------
// app.controller('customCtrl',
// function customCtrl(userFactory){
//    this.users = [];
//    // console.log(this);
// });


app.controller('listCtrl', ['userFactory', listCtrl]);

function listCtrl(userFactory){
   var _this = this;
   _this.users = [];
   _this.user = {};

   function setUsers(data){
       console.log('Got Factory data: ',data);
       _this.users = data;
       console.log('Set users: ',this.users);
       _this.user = {};
   }

   userFactory.index(setUsers);

   // this.sports = ['golf', 'basketball', 'hockey', 'tennis', 'football'];
   // this.users = [{first_name: "erik",last_name:"clineschmidt",favorite:"javascript"},{first_name: "jane",last_name:"doe",favorite:"python"}];

};

// FACTORIES -----------------------------

app.factory('userFactory',['$http',function($http){
   var factory = {};
   // var users = [];
   var users = [{first_name: "erik",last_name:"clineschmidt",favorite:"javascript"},{first_name: "jane",last_name:"doe",favorite:"python"}];


   factory.index = function(callback){
      console.log("USERFACTORY: INDEX");
      callback(users);
   }

   factory.create =  function(user,callback){

   }

   factory.delete = function(id,callback){

   }

   factory.one = function(id,callback){

   }

   return factory;

}]);
