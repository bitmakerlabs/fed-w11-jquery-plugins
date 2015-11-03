$(document).ready(function(){

  $('#btn-super').on('click', function(){
    swal("Good job!", "You clicked the button!", "success")
  });

  $('#btn-default').on('click', function(){
    alert('harro');
  });

});
