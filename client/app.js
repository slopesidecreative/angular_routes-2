var app = angular.module('app',['ngRoute']);
console.log(app);


// ROUTES -----------------------------

app.config(function($routeProvider){
   $routeProvider
   .when('/users',{
      templateUrl: 'partials/customizeUsers.html',
      controller: 'userCtrl as uc'
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

app.controller('userCtrl', ['userFactory', userCtrl]);
function userCtrl(userFactory){
   var _this = this;
   _this.users = [];
   _this.user = {};

   function setUsers(data){
       _this.users = data;
       _this.user = {};
   }
   _this.create = function(){
      console.log('USER CTRL CREATE ', _this.newUser);
      userFactory.create(_this.newUser, setUsers);
   }

   _this.destroy = function($index){
      console.log('USER CTRL DESTROY: ', $index);
      productFactory.delete(id,setUsers);
   }

   userFactory.index(setUsers);

};

app.controller('listCtrl', ['userFactory', listCtrl]);
function listCtrl(userFactory){
   var _this = this;
   _this.users = [];
   _this.user = {};

   function setUsers(data){
       _this.users = data;
       _this.user = {};
   }

   userFactory.index(setUsers);

};

// FACTORIES -----------------------------

app.factory('userFactory',['$http',function($http){
   var factory = {};
   // var users = [];
   var users = [{first_name: "erik",last_name:"clineschmidt",favorite:"javascript"},{first_name: "jane",last_name:"doe",favorite:"python"}];

   factory.index = function(callback){
      callback(users);
   }

   factory.create =  function(newUser,callback){
      users.push(newUser);
      callback(users);
   }

   factory.delete = function(id,callback){
      if(users.length>0){
         users.splice(id,1);
      }
      callback(users);
   }

   factory.one = function(index,callback){
      callback(users[index]);
   }

   return factory;

}]);
