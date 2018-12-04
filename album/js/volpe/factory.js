"use strict";

volpe.factory = {
    createPlayer: function createPlayer(data) {
        var player = mood.factory.createPawn(data);
        player.hudBobCycle = 0;
        player.inventory = [
                this.createAxeInventoryItem()
            ];
        player.activeInventory = player.inventory[0];
        player.speed = 3;

        return player;
    },
    createAbstractInventoryItem: function createAbstractInventoryItem(data) {
        var item = data || {};
        item.scale = 700;
        item.x = 0;
        item.y = 0;

        return item;
    },
    createAxeInventoryItem: function createAxeInventoryItem(data) {
        var item = this.createAbstractInventoryItem(data);
        item.texture = mood.factory.createTexture("assets/png.png", 148, 138);
        // item.bitmap = mood.bitmaps.get("assets/axe-hand.png");

        return item;
    }
}
