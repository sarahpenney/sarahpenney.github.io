"use strict";

mood.raycast = (function(){
    return {
        cast: function cast(map, point, angle, range) {
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            var noWall = { lengthSquared: Infinity }; // this is no good as we are not storing the length of this segment
            
            var ray = function ray(origin) {
                var stepX = createStep(sin, cos, origin.x, origin.y);
                var stepY = createStep(cos, sin, origin.y, origin.x, true);
                
                var nextStep = stepX.lengthSquared < stepY.lengthSquared
                    ? populateStep(stepX, 1, 0, origin.distance, stepX.y)
                    : populateStep(stepY, 0, 1, origin.distance, stepY.x);

                // THIS does not collapse the arrays into each other properly :(
                var out = nextStep.distance > range || nextStep.tile.terminal 
                    ? [nextStep]
                    : [nextStep].concat(ray(nextStep));

                return out;
            };
            var createStep = function createStep(rise, run, x, y, inverted) {
                if (run === 0)
                    return noWall;
                var dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
                var dy = dx * (rise / run);
                
                return {
                    x: inverted ? y + dy : x + dx,
                    y: inverted ? x + dx : y + dy,
                    lengthSquared: dx * dx + dy * dy
                };
            };
            var populateStep = function populateStep(step, shiftX, shiftY, distance, offset) {
                var dx = cos < 0 ? shiftX : 0;
                var dy = sin < 0 ? shiftY : 0;
                step.tile = mood.map.getTileAt(map, step.x - dx, step.y - dy);
                // check if we are intersecting objects in this cell if so add them to the output.

                // step.distance = distance + step.lengthSquared; THIS MAKES A WIERD EFFECT IN PLACE OF THE SQRT
                step.distance = distance + Math.sqrt(step.lengthSquared);
                step.shading = map.fogThickness;
                step.offset = offset - Math.floor(offset);
                
                return step;
            };

            // TODO : make is so that we do not create new arrays for each call to this function - 
            // we create multiple rays in cast which sucks, this is completely unnescesary.
            //  ray = {buffer:[step] length: number} check length instead of the length or the buffer.
            //
            //
            return ray({x: point.x, y: point.y, distance: 0, tile:{terminal:false, height:0}});
        }
    };
})();