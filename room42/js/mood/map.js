"use strict";

mood.map = (function(){
    return {
        loadMap: function loadMap(mapdata) {
            var physicsMap = mapdata.tilemap.map(function(id){
                return [id];
            });
            // add items
            // for(var i = 0; i < mapdata.objects; i++) {
            //     physicsMap[i] = [mapdata[i]];
            // }

            // TODO : naughty - switch this for a clone!
            mapdata.physicsMap = physicsMap;
            return mapdata;
        },
        getObjectsAt: function getObjectsAt(map, x, y) {
            x = Math.floor(x);
            y = Math.floor(y);
            var out = x < 0 || x > map.size - 1 || y < 0 || y > map.size - 1
                ? []
                : map.physicsMap[y * map.size + x];

            return out;
        },
        getTileAt: function getTileAt(map, x, y) {
            x = Math.floor(x);
            y = Math.floor(y);
            var id = x < 0 || x > map.size - 1 || y < 0 || y > map.size - 1
                ? -1
                : map.tilemap[y * map.size + x];
            var out = id == -1 ? map.tiles[0] : map.tiles[id];

            if(typeof out === "undefined")
                throw new Error("tile not found");

            return out;
        },
        updateLighting: function updateLighting(map, seconds) {
            if (map.light > 0)
                map.light = Math.max(map.light - 10 * seconds, 0);
        }
    };
})()
