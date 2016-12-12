var app = angular.module('app',['ngRoute']);

// factories
app.factory('userFactory',['$http',function($http){
   var factory = {};
   var users = [];

// ROUTES -----------------------------

   app.config(function($routeProvider){
      $routeProvider
      .when('/users',{
         templateURL: 'customizeUsers.html',
         controller: 'customCtrl as CC'
      })
      .when('/list',{
         templateURL: 'userList.html',
         controller: 'listCtrl as LC'
      })

   });

// CONTROLLERS -----------------------------
app.controller('customCtrl',
function customCtrl(){
   this.users = [];
   console.log('customCtrl: ',this);
});

app.controller('listCtrl',
function listCtrl(){
   this.users = [];
   console.log('listCtrl: ',this);
});

// FACTORIES -----------------------------

   factory.index = function(callback){
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


// controllers
