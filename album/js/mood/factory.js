"use strict";

mood.factory = {
    createMap: function createMap(data) {
        if(typeof data.size !== "number" ||
           typeof data.player !== "object" ||
           typeof data.tilemap !== "object" ||
           typeof data.tiles !== "object") {
            throw new Error("required properties missing from map");
        }
        data.objects = [];
        data.light = data.light || 0;
        data.fogThickness = data.fogThickness || 0;

        return data;
    },
    createTile: function createTile(data) {
        data = data || {};
        // should we cast rays beyond this tile?
        data.terminal = typeof data.terminal === "undefined" ? true : data.terminal;
        // The height of this tile. height 0 allows the player to walk on this tile.
        data.height = typeof data.height === "undefined" ? 1 : data.height;

        return data;
    },
    createPawn: function createPawn(data) {
        data = data || {};
        data.x = data.x || 0;
        data.y = data.y || 0;
        data.rotation = data.rotation || 0;
        
        return data;
    },
    createTexture: function createTexture(path, width, height) {
        var image = new Image();
        image.src = path;
        
        var data = {
            image: image, 
            width: width,
            height: height
        }

        return data;
    }
}
