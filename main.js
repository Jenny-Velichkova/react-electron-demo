const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

// Create the Electron window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Preload script ensures secure communication between React and Electron
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  // Load your frontend (React dev server or production build)
  win.loadURL('http://localhost:3000');
}

// Handle IPC event from Renderer (React) to open a file dialog
ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'], // Only allow single file selection
    filters: [{ name: 'Text or JSON Files', extensions: ['txt', 'json'] }]
  });

  if (canceled || filePaths.length === 0) {
    return { canceled: true };
  }

  const filePath = filePaths[0];

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return { canceled: false, filePath, content };
  } catch (err) {
    return { canceled: false, filePath, content: `Error reading file: ${err.message}` };
  }
});

app.whenReady().then(createWindow);
