const { app, BrowserWindow } = require('electron');
const path = require('path');
const { screen } = require('electron');

function createWindow() {
  const screenSize = screen.getPrimaryDisplay().workAreaSize;

  const width = Math.min(screenSize.width, 1550);
  const height = Math.min(screenSize.height, 1250);

  const win = new BrowserWindow({
    width,
    height,
    icon: path.join(__dirname, 'public/fav/light/favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL('http://localhost:3000'); // Vite dev server URL
}

app.whenReady().then(createWindow);
