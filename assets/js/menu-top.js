$(window).scroll(function(){
  var sticky = $('#headerBar'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('headerScroll');
  else sticky.removeClass('headerScroll');
});
