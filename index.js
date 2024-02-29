const electron = require('electron');
const { app, BrowserWindow, autoUpdater } = electron; // Requerir el módulo 'autoUpdater'

const createWindow = () => {
    const configs = {
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    };

    let window = new BrowserWindow(configs); // Crear una nueva ventana

    autoUpdater.checkForUpdates();

    window.loadFile("main.html"); // Cargar el archivo en la ventana
};

app.whenReady().then(createWindow);