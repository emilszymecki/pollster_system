function paginator(x,text){
    var pageName =  $('.page-name-'+x); 
    var show_per_page = 1;
    var number_of_items =pageName.find("tbody").children('tr').size();
    var number_of_pages = Math.ceil(number_of_items / show_per_page);
  
     pageName.find('.panel-body').append('<button type="button" class="btn btn-primary previous-btn">'+text+'</button>');
     pageName.find(".previous-btn").removeClass("btn-primary");
     pageName.find(".previous-btn").prop('disabled', true);
     
    if(show_per_page > 1){
     pageName.find('.panel-body').append('<button type="button" class="btn btn-primary next-btn">Następne pytanie</button>');
    }

    pageName.find(".next-btn").hide();


    if(show_per_page > 1){
      pageName.find(".radio").one("change",function(){
        var counter_row = 0;
        var counter_col = 0;
        pageName.find("tbody").find(".ready_row").each(function(){
          counter_row += 1;
          $(this).find(".clickTd .answer:checked").each(function(){
            counter_col += 1;
          });
        });
      console.log(counter_row,counter_col);
        if(counter_col>=counter_row){
          console.log("OK");
          pageName.find(".next-btn").show();
        }
        else{
          pageName.find(".next-btn").hide();
        }
      });
    
      pageName.find(".next-btn").on("click",function(){
          next(pageName);
      });
    }
    else{
        pageName.find(".radio").parent(".clickTd").on("click",function(e){
          if(pageName.find(".ready_row").css('opacity') == "1"){
            next(pageName);
          }
          else{
            e.preventDefault();
            return false;
          }
        });
      }
  
      pageName.find(".previous-btn").on("click",function(){
        if(show_per_page > 1) pageName.find(".next-btn").show();
        previous(pageName);
      });
     
  
    
  
    pageName.find('.panel-body').append('<div class=controls></div><input class=current_page type=hidden><input class=show_per_page type=hidden>');
    pageName.find('.current_page').val(0);
    pageName.find('.show_per_page').val(show_per_page);

    var navigation_html = '<a class="prev" onclick="previous()">Prev</a>';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<a class="page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
    }
    navigation_html += '<a class="next" onclick="next()">Next</a>';
    
    
    
      pageName.find('.controls').html(navigation_html);
      pageName.find('.controls .page:first').addClass('Pagination_active');
    //$('.page-name-'+x+' .controls .page:first').addClass('Pagination_active');
          
      pageName.find("tbody").children().hide();
      pageName.find("tbody").children().slice(0, show_per_page).fadeIn(400).addClass("row_Pagination_active").addClass("ready_row");
      pageName.find('.controls').after('<div class = "counter">'+1+"/"+Math.ceil(number_of_items/show_per_page)+'</div>');
      pageName.find('.controls').hide();
      
    function previous(a) {
      a.find(".next-btn").show(); 
      new_page = parseInt( a.find('.current_page').val(), 0) - 1;
    //if there is an item before the current Pagination_active link run the function
      if (a.find('.Pagination_active').prev('.page').length == true) {  
        go_to_page(new_page,a);
      }

    }

    function next(a) { 
      new_page = parseInt(a.find('.current_page').val(), 0) + 1;
      //if there is an item after the current Pagination_active link run the function
      if (a.find('.Pagination_active').next('.page').length == true) {
          go_to_page(new_page,a);
      }

    }
    
    function go_to_page(page_num,z) {
        var show_per_page = parseInt(z.find('.show_per_page').val(), 0);
        var number_of_items = z.find('tbody').children('tr').size();
        start_from = page_num * show_per_page;    
      
        if(page_num != 0){
            pageName.find(".previous-btn").addClass("btn-primary");
            pageName.find(".previous-btn").prop('disabled', false);
        }else{
            pageName.find(".previous-btn").removeClass("btn-primary");
            pageName.find(".previous-btn").prop('disabled', true);
        }
      
        if(page_num == Math.ceil(number_of_items/show_per_page)-1){   
            pageName.find(".next-btn").removeClass("btn-primary");
            pageName.find(".next-btn").prop('disabled', true);
        }else{
            pageName.find(".next-btn").addClass("btn-primary");
            pageName.find(".next-btn").prop('disabled', false);
        }
      
        end_on = start_from + show_per_page;
    
        z.find('tbody').children().hide().removeClass('ready_row').slice(start_from, end_on).fadeIn(400).addClass("row_Pagination_active").addClass('ready_row');
        z.find('.page[longdesc=' + page_num + ']').addClass('Pagination_active').siblings('.Pagination_active').removeClass('Pagination_active');
        z.find('.current_page').val(page_num);
        z.find('.counter').html(page_num+1+"/"+Math.ceil(number_of_items/show_per_page));
      
        var row_size = z.find('.ready_row').size();
        var row_ok_size = 0;
        z.find('.ready_row').each(function(){
          if($(this).hasClass("row-ok")) row_ok_size += 1;
        });
        if(row_ok_size >= row_size){
          pageName.find(".next-btn").show();
        }
        else{
          pageName.find(".next-btn").hide();
        }
    
    
    }
    
}