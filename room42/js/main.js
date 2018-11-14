"use strict";

(function(){
    // TODO load these in workers so we can preload assets and load the 
    // scripts at runtime
    var map = volpe.mapdata.e1m1; 
    var player = map.player;

    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
   
    var lastTime = 0;
    function frame(time) {
        var seconds = (time - lastTime) * 0.001;
        lastTime = time;
        if (seconds < 0.2) {
            stats.begin();
            
            volpe.player.update(player, map, seconds);

            mood.renderer.drawBackdrop(player.rotation, map);
            mood.renderer.drawMap(player, map);
            mood.renderer.drawOverlay(player.activeInventory.texture, 
                player.activeInventory.x, 
                player.activeInventory.y,
                player.activeInventory.texture.width * 2, 
                player.activeInventory.texture.height * 2)
            
            stats.end();
        } 
        requestAnimationFrame(frame);
    }
 
    requestAnimationFrame(frame);

})()