// function pictureChange() {
//     document.getElementById('theImage').src="images/DM_DT.png";
// }

var image_tracker = 'orange';

 
 function pictureChange(){
 var image = document.getElementById('theImage');
 if(image_tracker=='orange'){
 image.src='images/MC_DM_2.png';
 image_tracker='blue';
 }
 else{
 image.src='images/MC_LM_2.png';
 image_tracker='orange';
 }

 var elem = document.getElementById("theButton");
 if (elem.value=="switch to: DARKMODE") elem.value = "switch to: LIGHTMODE";
 else elem.value = "switch to: DARKMODE";





 }





 var image_trackerMobile = 'orangeMobile';
 
 function pictureChangeMobile(){
 var image = document.getElementById('theImageMobile');
 if(image_trackerMobile=='orangeMobile'){
 image.src='images/MC_DM_2.png';
 image_trackerMobile='blueMobile';
 }
 else{
 image.src='images/MC_LM_2.png';
 image_trackerMobile='orangeMobile';
 }

 var elem = document.getElementById("theButtonMobile");
 if (elem.value=="switch to : DARKMODE") elem.value = "switch to : LIGHTMODE";
 else elem.value = "switch to : DARKMODE";

 }




// (function() {
//   function scrollHorizontally(e) {
//     e = window.event || e;
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
//     document.body.scrollLeft -= (delta*40); // Multiplied by 40
//     e.preventDefault();
//   }
//   if (window.addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     window.addEventListener('mousewheel', scrollHorizontally, false);
//     // Firefox
//     window.addEventListener('DOMMouseScroll', scrollHorizontally, false);
//   } else {
//     // IE 6/7/8
//     window.attachEvent('onmousewheel', scrollHorizontally);
//   }
// })();

// $(function() {
//   console.log('werk');
//   $('ul.nav a').bind('click',function(event){
//     var $anchor = $(this);
//                     /*
//                     if you want to use one of the easing effects:
//                     $('html, body').stop().animate({
//                         scrollLeft: $($anchor.attr('href')).offset().left
//                     }, 1500,'easeInOutExpo');
//                      */
//     $('html, body').stop().animate({
//       scrollLeft: $($anchor.attr('href')).offset().left
//     }, 1000);
//     console.log('werk2');
//     event.preventDefault();
//   });
// });
