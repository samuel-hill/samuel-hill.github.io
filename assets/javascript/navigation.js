$(document).ready(function() {

  $('a.nav').click(function(ev) {
    ev.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
  });

});

