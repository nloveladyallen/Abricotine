/*
*   Abricotine - Markdown Editor
*   Copyright (c) 2015 Thomas Brouard
*   Licensed under GNU-GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var app = require("app"),
    pathModule = require("path"),
    pkg = require.main.require("../package.json"),
    appPath = app.getAppPath(),
    userDataPath = pathModule.join(app.getPath("userData"), "/app"),
    tmpPath = pathModule.join(app.getPath("temp"), "/Abricotine"),
    isAsar = appPath.match(/\.asar$/) !== null;

module.exports = {
    appName: "Abricotine",
    appVersion: pkg.version,
    homepageURL: pkg.repository.url,
    path: {
        app: appPath,
        icon: pathModule.join(appPath, "/icons/abricotine.png"),
        bigIcon: pathModule.join(appPath, "/icons/abricotine@2x.png"),
        defaultDir: isAsar ? appPath + ".unpacked/default" :  appPath + "/default",
        dictionaries: pathModule.join(userDataPath, "/dict"),
        schema: pathModule.join(userDataPath, "/schema.json"),
        templatesDir: pathModule.join(userDataPath, "/templates"),
        tmp: tmpPath,
        tmpThemes: pathModule.join(tmpPath, "/themes"),
        userConfig: pathModule.join(userDataPath, "/config.json"),
        userData: userDataPath,
        window: pathModule.join(appPath, "/app/renderer/index.html")
    }
};
