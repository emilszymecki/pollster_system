
//Dzielenie pytań na połowę 
var list = $(".page-name-S11 .question").find(".question-row");
$(list).css("margin-top","0");
var all = [];
var len = Math.floor(list.length/2);
$(list).each(function(i,el){
	all.push(el);
});
var half_1 = all.slice(0,len);
var half_2 = all.slice(len);
$(half_1).addClass('odd').addClass('col-md-6');
$(half_2).addClass('even').addClass('col-md-6');


//Dzielenie pytań parzysty nie parzysty
var list = $(".page-name-S11 .question").find(".question-row");
$(list).css("margin-top","0px");
var all = [];
var len = Math.floor(list.length/2);
$(list).each(function(i,el){
	all.push(el);
});
$(all).each(function(i,el){
	if(i % 2){
		$(el).addClass('odd').addClass('col-md-6')
	}
	if(i % 2 == 0){
		$(el).addClass('even').addClass('col-md-6')
	}
})

//gotowa funkcja
function splitColumn(id, col) {

	var list = $(".page-id-"+id).find(".question-row");
	$(list).css("margin-top","0");
	var all = [];
	var num_col = 0;

	if(col === 1){
		num_col = 8;
	}
	if(col === 2){
		num_col = 6;
	}
	if(col === 3){
		num_col = 4;
	}
	if(col === 4){
		num_col = 3;
	}
	if(col === 6){
		num_col = 2;
	}

	
	$(list).each(function(i,el){
	all.push(el);
	});
	
	$(all).each(function(i,el){
	if(i % 2){
		$(el).addClass('odd').addClass('col-md-'+num_col)
	}
	if(i % 2 == 0){
		$(el).addClass('even').addClass('col-md-'+num_col)
	}
	});

}