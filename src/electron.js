const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("close", app.quit);
});
