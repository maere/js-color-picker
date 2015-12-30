/* Exercise 2: Color picker */

function setPreviewColor(color){
  $('.preview').css('background-color', color);
  var colorChoice = $('.preview').css('background-color');
  $('.color-code').css('color', colorChoice);

}

$(document).on('keyup', '#color', function(){
  setPreviewColor($('input').val());
});

function addBox(color){
  //add box to #colors div
  $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}

$(document).on('click', '#add-to-favorite', function(){
  var colorChoice = $('input').val();
  addBox(colorChoice);
  if($('#colors .item').length>16){
    $('#colors .item').last().remove();
  }
  $('input').val('');
  $('input').focus();
});

$(document).ready(function(){
  var colors = [ "22ac5e", "d68236", "770077" ];
  $.each(colors, function(idx, color){
    addBox(color);
    var i = Math.floor(Math.random()* colors.length);
    setPreviewColor(colors[i]);

    previewColor = $('.preview').css('background-color');
  });

});

var previewColor;

$(document).on('mouseenter', '.item', function(){

  var currColor = $(this).css('background-color');
  $('.preview').css('background-color', currColor);
});

$(document).on('mouseleave','#colors', function(){
      $('.preview').css('background-color', previewColor);
});
