$(document).on('pop-initialized', function(){

  if ($('html').is('.lt-ie9')) {
    $('.asset').live('initialize', function(){
      $('.columnizer-row:nth-child(even)').removeClass('even odd').addClass('even');
      $('.columnizer-row:nth-child(odd)').removeClass('even odd').addClass('odd');
    });
  }

  $('.asset-type-imagegroup').live('initialize', function(){
    if ($(this).find('.header-image').length > 0) {
      return;
    }
    $(this).find('.slide').on('mouseenter', function() {
      var $img = $(this).find('img');
      var $cover = $(this).find('.cover');
      if ($cover.length < 1) {
        $cover = $('<div class="cover"><div class="bg"></div><div class="view">view</div></div>').insertAfter($img).hide();
      }
      $cover.fadeIn(200);
    });
    $(this).find('.slide').on('mouseleave', function() {
      var $cover = $(this).find('.cover');
      $cover.stop().fadeOut(200);
    });
  });
});