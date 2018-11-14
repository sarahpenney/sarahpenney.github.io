"use strict";

mood.physics = (function(){
    return {
        rotate: function rotate(pawn, angle) {
            pawn.rotation = (pawn.rotation + angle + mood.TWO_PI) % (mood.TWO_PI);
        },
        walk: function walk(pawn, distance, map) {
            var dx = Math.cos(pawn.rotation) * distance;
            var dy = Math.sin(pawn.rotation) * distance;
            var xtile = mood.map.getTileAt(map, pawn.x + dx, pawn.y);
            var ytile = mood.map.getTileAt(map, pawn.x, pawn.y + dy);
            
            if (xtile.height === 0) 
                pawn.x += dx;
            if (ytile.height === 0) 
                pawn.y += dy;
        }
    }
})();