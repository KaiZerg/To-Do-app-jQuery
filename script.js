var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
        
		var todo = $('#todo');
    if(todo.val() !== "") {
  	
     	var html = template(todo.val());
    	$(html).appendTo('.list');
    	$('#todo').val("");    
    }
    return false;  
  });
$(document).on("click", '.glyphicon-remove', function() {
$(this).parent().remove(); }); 
$(document).on("click", '.glyphicon-star', function() {
$(this).toggleClass('active'); 
});
  
  
};

$(document).ready(main);