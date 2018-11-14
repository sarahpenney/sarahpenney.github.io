"use strict";
// controls is a static object we only want one!
mood.controls = (function(){
    var defaultMapping = { 
        37: "left",         // arrow
        39: "right",        // arrow
        38: "forward",      // arrow
        40: "backward",     // arrow
        65: "left",         // a
        68: "right",        // d
        87: "forward",      // w
        83: "backward"      // s
    };
    var states = { 
        "left": false, 
        "right": false, 
        "forward": false, 
        "backward": false 
    };
    var onKey = function onKey(val, e) {
        var state = defaultMapping[e.keyCode];
        if (typeof state === "undefined")
            return;
        states[state] = val;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
    };
    document.addEventListener("keydown", onKey.bind(this, true), false);
    document.addEventListener("keyup", onKey.bind(this, false), false);

    return {states: states};
})()

