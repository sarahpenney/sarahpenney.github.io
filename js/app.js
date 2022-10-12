


var image_tracker = 'orange';

 
 function pictureChange(){
 var image = document.getElementById('theImage');
 if(image_tracker=='orange'){
 image.src='images/MC_DM_3.png';
 image_tracker='blue';
 }
 else{
 image.src='images/MC_LM_3.png';
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
 image.src='images/MC_DM_3.png';
 image_trackerMobile='blueMobile';
 }
 else{
 image.src='images/MC_LM_3.png';
 image_trackerMobile='orangeMobile';
 }

 var elem = document.getElementById("theButtonMobile");
 if (elem.value=="switch to : DARKMODE") elem.value = "switch to : LIGHTMODE";
 else elem.value = "switch to : DARKMODE";

 }

