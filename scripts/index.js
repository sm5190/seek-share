// setup materialize components

  $(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });
  $(document).ready(function(){
    $("#demo").on("hide.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Open');
    });
    $("#demo").on("show.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
    });
  });
});
