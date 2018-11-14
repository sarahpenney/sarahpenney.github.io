"use strict";

volpe.player = (function(){
    var viewportWidth = mood.viewportWidth;
    var viewportHeight = mood.viewportHeight;

    var updateInventoryItem = function updateInventoryItem(player) {
        var item = player.activeInventory;
        var bobX = Math.cos(player.hudBobCycle * 2) * player.speed * 5;
        var bobY = Math.sin(player.hudBobCycle * 4) * player.speed * 5;
        item.x = viewportWidth * 0.66 + bobX;
        item.y = viewportHeight * 0.6 + bobY;
    }

    var handleInput = function handleInput(player, map, seconds) {
        var controls = mood.controls.states;

        if (controls.left) {
            mood.physics.rotate(player, -Math.PI * seconds);
        }
        if (controls.right) {
            mood.physics.rotate(player, Math.PI * seconds);
        }
        if (controls.forward) {
            mood.physics.walk(player, player.speed * seconds, map);
            player.hudBobCycle += 0.1;
        }
        if (controls.backward) {
            mood.physics.walk(player, -player.speed * seconds, map);
            player.hudBobCycle -= 0.1;
        }
    }

    return { 
        update: function update(player, map, seconds) {
            updateInventoryItem(player);
            handleInput(player, map, seconds);
        }
    };

})();