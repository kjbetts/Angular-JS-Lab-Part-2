(function(){
  function FormController(){
   var vm = this;
   vm.todoList =[];
   vm.addItem = function(item){
    console.log(item);
     vm.todoList.push(item);
     document.getElementById("addToDo").value="";
    }
    vm.remove = function(index){
      vm.todoList.splice(index, 1)
    }
  }
  angular
  .module("app")
  .controller("FormController", FormController);







})();
