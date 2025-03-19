const { contextBridge, ipcRenderer } = require('electron');

// Expose a secure API to the renderer process (React)
contextBridge.exposeInMainWorld('electronAPI', {
  // This method invokes the dialog:openFile event in the main process
  openFileDialog: () => ipcRenderer.invoke('dialog:openFile')
});
