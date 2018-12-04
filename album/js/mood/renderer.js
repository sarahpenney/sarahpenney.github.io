"use strict";

mood.renderer = (function(){
    var raycast = mood.raycast.cast;

    var CONTEXT = document.getElementById(mood.canvasId).getContext("2d");
    var DRAW_DISTANCE = 14;
    var LIGHT_RANGE = 10;
    var VIEWPORT_WIDTH = mood.viewportWidth;    // is this necesary?
    var VIEWPORT_HEIGHT = mood.viewportHeight;  // is this necesary?
    var RESOLUTION = mood.resolution;           // is this necesary?
    var FOCAL_LENGTH = mood.focalLength;        // is this necesary?
    var SPACING = VIEWPORT_WIDTH / RESOLUTION;
    var columnAngles = [];
    var init = function init() {
        // cache the atan2 as it can be slow.
        for (var column = 0; column < RESOLUTION; column++) {
            var x = column / RESOLUTION - 0.5;
            var angle = Math.atan2(x, FOCAL_LENGTH);
            
            columnAngles.push(angle);
        }
    };

    init();

    return {
        drawBackdrop: function drawBackdrop(rotation, map) {
            var sky = map.skybox;
            var width = sky.width * (VIEWPORT_HEIGHT / sky.height) * 2;
            var left = (rotation / mood.TWO_PI) * -width;
            CONTEXT.save();
            CONTEXT.drawImage(sky.image, left, 0, width, VIEWPORT_HEIGHT);
            if (left < width - VIEWPORT_WIDTH) {
                CONTEXT.drawImage(sky.image, left + width, 0, width, VIEWPORT_HEIGHT);
            }
            if (map.light > 0) {
                CONTEXT.fillStyle = "#ff0000";
                CONTEXT.globalAlpha = map.light * 0.1;
                CONTEXT.fillRect(0, VIEWPORT_HEIGHT * 0.5, VIEWPORT_WIDTH, VIEWPORT_HEIGHT * 0.5);
            }
            CONTEXT.restore();
        },
        drawOverlay: function drawOverlay(bitmap, x, y, width, height) {
            var w = width || bitmap.width;
            var h = height || bitmap.height;
            CONTEXT.drawImage(bitmap.image, x, y, w, h);
        },
        drawMap: function drawMap(player, map) {
            CONTEXT.save();

            for (var column = 0; column < columnAngles.length; column++) {
                var angle = columnAngles[column];
                var ray = raycast(map, player, player.rotation + angle, DRAW_DISTANCE);
                drawColumn(column, ray, angle, map);
            }
            CONTEXT.restore();

            function drawColumn(column, ray, angle, map) {
                var left = Math.floor(column * SPACING);
                var width = Math.ceil(SPACING);
                var stepIndex = ray.length;
                while (stepIndex--) {
                    var step = ray[stepIndex];
                    var texture = step.tile.texture;
                    if (texture) {
                        var textureX = Math.floor(texture.width * step.offset);
                        var wall = project(step.tile.height, angle, step.distance);
                        
                        CONTEXT.globalAlpha = 1;
                        CONTEXT.drawImage(texture.image, textureX, 0, 1, texture.height, left, wall.top, width, wall.height);
                        
                        CONTEXT.fillStyle = "#2E1800";
                        CONTEXT.globalAlpha = Math.max((step.distance + step.shading) / LIGHT_RANGE - map.light, 0);
                        CONTEXT.fillRect(left, wall.top, width, wall.height);
                    }
                }
            }

            function project(height, angle, distance) {
                var z = distance * Math.cos(angle);                                            // CACHE THIS!
                var wallHeight = VIEWPORT_HEIGHT * height / z;
                var bottom = VIEWPORT_HEIGHT * 0.5 * (1 + 1 / z);
                
                return {
                    top: bottom - wallHeight,
                    height: wallHeight
                }; 
            }
        }
    };
})()
