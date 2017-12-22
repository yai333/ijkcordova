cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
                  {
                  "id": "cordova-plugin-ijkplayer.ijkplayer",
                  "file": "plugins/cordova-plugin-ijkplayer/www/ijkplayer.js",
                  "pluginId": "cordova-plugin-ijkplayer",
                  "merges": [
                             "ijkplayer"
                             ]
                  }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-dialogs": "1.3.3",
                 "cordova-plugin-ijkplayer": "1.0.0"
};
// BOTTOM OF METADATA
});
