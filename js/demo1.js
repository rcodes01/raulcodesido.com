/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#625474',
    lineColor: '#625474'
	
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#625474',
    lineColor: '#625474'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
