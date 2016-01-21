$('.page-id-2211 #start-button').on('click', function(event){
  var table = $(this).parents('body').find('tbody');
  var row = table.find("tr");
  row.each(function(i,el){
    if($(this).hasClass("row-ok")){
      $(this).removeClass("alert").removeClass("alert-danger");
    }
    else{
      $(this).addClass("alert").addClass("alert-danger");
    }
  })
});