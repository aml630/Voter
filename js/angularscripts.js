// angular.module("todoListApp", [])
// 
// 
// angular.module("todoListApp")   
// .service('dataService', function ($http) {
//     this.helloConsole = function() {
//         console.log("dat service string");
//     }
//     
//     this.todos =  function (callback) {
//      $http.get('todos.json')
//     .then(callback)
//     }    
//     
// });
// 
// angular.module('todoListApp')
// 
// .controller('mainCtrl', function($scope, dataService) {
//     
//     $scope.addTodo = function () {
//         var todo = {name: "This is a new todo"};
//       $scope.toDoList.unshift(todo);  
//     };
//         
//        
//         
//         $scope.helloWorld = function() {
//             console.log("hello there");
//         }; 
// 
//         $scope.toDoList =         [
//                {"name": "walk the cat"},
//                 {"name": "run  the cat"},
//                 {"name": "walk the cat"},
//                 {"name": "walk the cat"},
//                 {"name": "walk the cat"}
//             ]
//                    
//         });
//         
//         
// 
 angular.module("myListApp", [])

.controller("mainCtrl", function ($scope) {
 $scope.howdyThere = function () {
    console.log("howdy there")
   };
   
$scope.Listables = [
    
        {"name": "Sass", "votes": 8, link:" https://www.facebook.com/photo.php?fbid=10101757609218946&set=a.760309416786.2364624.11513615&type=3&theater"},
    {"name": "My Own Love", "votes": 10, link:"https://www.facebook.com/kathleen.leavitt.94?fref=ts"},
               {"name": "Yes", "votes": 0},
               {"name": "No", "votes": 0},               
               {"name": "Maybe", "votes": 0},
               {"name": "So", "votes": 1},
               {"name": "aasdfasd", "votes": 0}
 
]

$scope.update = function() {
$scope.Listables.push({

    name:$scope.addition,
    votes:0,
    link:$scope.link
})
  
}




});
    

