
cordova.define("cordova-plugin-ijkplayer.ijkplayer", function(require, exports, module) {

var ijkplayer = exports;

var exec    = require('cordova/exec');
            
ijkplayer.playWithUrl=function(url){
  exec(null, null, "IJKPlayer", "playWithUrl", [url]);
}
});


