var app = angular.module('inventario',[]);


app.controller('formControl', function($scope){

$scope.formData = {};

$scope.submitForm = function (formData) {
    alert('Form submitted with' + JSON.stringify(formData));
  };

});


app.controller('newControl',function($scope){

	$scope.onSubmit = function(){
    alert("form submitted");
  }



});
