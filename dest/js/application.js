$(Document).ready(function(){
	$('.hamburger').click(function(){
		$('.queryone').toggle();
	});

	$('div').bind('click', function( event ){
    	alert('Hi there!');
    });



});
$(function() {
            $( "#draggable" ).draggable();
         });