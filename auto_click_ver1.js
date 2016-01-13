var row = $('#option-table').find("tr");
row.each(function(index, el) {
	var Pattern_a = new RegExp('[\?]$');
	var Pattern_b = new RegExp('^(Inne)');
	var textbox = $(this).find("td:nth-child(2) .text input[type=text]").val();
	var box = $(this).find("td:first-child .text input[type=text]");
	var RotateButton = $(this).find("td:nth-child(4) .checkbox input[type=checkbox]");
	var OtherButton = $(this).find("td:nth-child(3) .checkbox input[type=checkbox]");
	var BlockButton = $(this).find("td:nth-child(5) .checkbox input[type=checkbox]");
	var box_val = parseInt(box.val());
	//var textbox_val = textbox.val();
	if(box_val){
		RotateButton.prop('checked',true).trigger('change');
		if(box_val >96){
			BlockButton.prop('checked',true).trigger('change');
			RotateButton.prop('checked',false).trigger('change');
		}
		if(Pattern_a.test(textbox) || Pattern_b.test(textbox)){
			OtherButton.prop('checked',true).trigger('change');
			RotateButton.prop('checked',false).trigger('change');
		}
	}
});