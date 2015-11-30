$(document).ready(function() {

  // var mouseIn = function() {
  //   console.log('mouse in');
  //   $('.subnav').removeClass('hidden');
  // };
  //
  // var mouseOut = function() {
  //   console.log('mouse out');
  //   $('.subnav').addClass('hidden');
  // }
  //
  // $('.nav li').hover(mouseIn, mouseOut);

   $('.nav-bar li').hover(function() {
     $(this).find('.sub-nav').removeClass('hidden');
   }, function() {
     $(this).find('.sub-nav').addClass('hidden');
   });

   
});
