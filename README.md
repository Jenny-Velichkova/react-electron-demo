# React + Electron File Dialog Demo

_A modern demo showing how to integrate React with Electron, securely handle IPC, and access the file system via native dialogs._

![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Electron](https://img.shields.io/badge/Desktop-Electron-9cf?style=flat-square)
![IPC](https://img.shields.io/badge/IPC-secure_contextBridge-green?style=flat-square)
![Status](https://img.shields.io/badge/Project-Demo-lightgrey?style=flat-square)

---

This is a demo project built to showcase **React and Electron integration**, including **secure IPC (Inter-Process Communication)** and file reading from the user's system using the **native file dialog** in Electron.

The project demonstrates a clean, modular architecture with a focus on best practices like **contextBridge** and **preload scripts**.

The project demonstrates a clean, modular architecture with a focus on best practices like contextBridge and preload scripts.

Project Structure
react-electron-demo/ ├── src/ │ ├── components/ │ │ └── FileReader.js ← React component to trigger file dialog and display content
│ └── App.js ← Main React component, renders FileReader
├── preload.js ← Context bridge to securely expose Electron API
├── main.js ← Electron main process (handles window and file access)

What This Demo Does
Uses Electron's native file dialog to let users select a file.
Reads the selected file content (text or JSON) using Node.js fs module.
Sends the file path and content back to the React frontend using IPC.
Displays both the file path and its content in a clean React UI.

Architecture Overview
File	Role
main.js	Electron's main process – creates the window and handles backend logic
preload.js	Exposes safe functions from Electron to React via contextBridge
FileReader.js	React component – calls the API, gets file data, displays content
App.js	Renders the interface and mounts the FileReader component
How the Logic Works
User clicks “Select File” button in the React UI.
React calls window.electronAPI.openFileDialog() (from preload.js).
Electron opens a native file dialog via dialog.showOpenDialog().
When a file is selected:
Electron reads the content using fs.readFileSync()
The file path and content are returned to React.
React updates the UI with the selected file path and its content.
Technologies Used
React – frontend UI
Electron – cross-platform desktop framework
IPC (Inter-Process Communication) – connects renderer and main processes
Context Bridge & Preload Script – secure API exposure
Node.js fs module – for file reading
Why I Use This Demo
I created this project as part of my personal toolkit to:

Demonstrate real-world Electron/React integrations
Help clients understand IPC concepts visually
Show my ability to explain code clearly and structure projects properly
Want to know more?
Let me know if you'd like me to:

Expand this demo with saving files
Add JSON parsing/rendering
Include drag and drop features
Package this as a full cross-platform app
I'm happy to customize or walk you through the logic step by step.
