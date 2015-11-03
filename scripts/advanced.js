$(document).ready(function(){
  $('#waypoint-top').waypoint({
    handler: function(direction) {
      swal("Oops...", "Something went wrong!", "error");
    }
  });

  $('#waypoint-middle').waypoint({
    offset: "50%",
    handler: function(direction) {
      swal("Oops...", "Something went wrong!", "success");
    }
  });

  $('#waypoint-bottom').waypoint({
    offset: "bottom-in-view",
    handler: function(direction) {
      if ( direction === "down" ) {
        swal("Oops...", "Something went wrong!", "info");
      }
    }
  });

});
