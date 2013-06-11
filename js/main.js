$(document).on('pop-initialized', function(){
  $('.asset-type-imagegroup').live('initialize', function(){
    var $parent_row = $(this).parents('.columnizer-row');
    if ($parent_row.is('.columnizer-row-contents-imagegroup') && $parent_row.index() == 0) {
      return;
    }
    $(this).find('.slide').on('mouseenter', function() {
      var $img = $(this).find('img');
      var $cover = $(this).find('.cover');
      if ($cover.length < 1) {
        $cover = $('<div class="cover"><div class="bg"></div><div class="view">view</div></div>').insertAfter($img).hide();
      }
      $cover.stop().fadeIn(200);
    });
    $(this).find('.slide').on('mouseleave', function() {
      var $cover = $(this).find('.cover');
      $cover.stop().fadeOut(200);
    });
  });
});
