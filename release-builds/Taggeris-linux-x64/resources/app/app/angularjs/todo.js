angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };

    $scope.favorites = ['Invoice', 'Expenses', 'Payroll', 'Quickratio', 'Documents', 'Calendar', 'Blank', 'test'];
    $scope.addItem = function () {
    $scope.favorites.push($scope.selectedFav);
  };

    var oldFavs = $scope.favorites;
   $scope.favorites = [];
   angular.forEach(oldFavs, function(x) {
       if (!x.done) $scope.favorites.push(x);
   });
    $scope.removeItem = function (x) {
    $scope.favorites.splice(x, 1);
  };
    $scope.showCls = false;
    $scope.close = function(){
      $scope.showCls = true;
    };
    $scope.rClose = function(){
      $scope.showCls = false;
    };
    $scope.showFav = false;
    $scope.showOf = function(){
      $scope.showFav = true;
    };
    $scope.closeFav = function(){
      $scope.showFav = false;
    };

    $scope.templates = [{ name: 'nav.html', url: 'layout/nav.html'}, { name: 'head.html', url: 'layout/head.html'}, { name: 'tabs.html', url: 'layout/tabs.html'}];
    $scope.nav = $scope.templates[0];
    $scope.head = $scope.templates[1];
    $scope.tabs = $scope.templates[2];

  $scope.countries = ['United Kingdom', 'USA', 'Germany', 'France', 'Netherland'];

  $scope.customerMenu = false;
  $scope.custMenu = function(){
    $scope.customerMenu = !$scope.customerMenu;
  };

  $scope.supplierMenu = false;
  $scope.supMenu = function(){
    $scope.supplierMenu = !$scope.supplierMenu;
  };

  $scope.accountMenu = false;
  $scope.accMenu = function(){
    $scope.accountMenu = !$scope.accountMenu;
  };

  $scope.humResMenu = false;
  $scope.hrMenu = function(){
    $scope.humResMenu = !$scope.humResMenu;
  };

  $scope.settingMenu = false;
  $scope.setMenu = function(){
    $scope.settingMenu = !$scope.settingMenu;
  };

  $scope.userMenu = false;
  $scope.uMenu = function(){
    $scope.userMenu = !$scope.userMenu;
  };

  $scope.userName = 'Festus';

  });
