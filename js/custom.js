$(function(){
  $('.rhombus').height($('.rhombus').width()/1);

  $(window).resize(function(){
    $('.rhombus').height($('.rhombus').width()/1);
  });
});

$(function(){
  $('.rhombus_mini').height($('.rhombus_mini').width()/1);

  $(window).resize(function(){
    $('.rhombus_mini').height($('.rhombus_mini').width()/1);
  });
});
$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 900);
		return false;
	});


});
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});