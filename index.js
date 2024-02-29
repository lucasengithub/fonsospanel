const electron = require('electron');
const { app, BrowserWindow, autoUpdater, screen } = electron; // Añade 'screen' aquí

const createWindow = () => {
    const { width } = screen.getPrimaryDisplay().workAreaSize; // Obtener el ancho de la pantalla

    const configs = {
        transparent: true,
        width: width, // Ancho de pantalla completo
        height: 48, // Altura de 48px
        x: 0, // Posición x en 0 para que esté a la izquierda
        y: screen.getPrimaryDisplay().bounds.height - 48, // Posición y para que esté abajo
        frame: false, // Sin barra de título
        autoHideMenuBar: true,
        type: 'dock', // Tratado como un panel en Linux
        alwaysOnTop: true, // Siempre en la parte superior
        skipTaskbar: true, // Evita que la ventana aparezca en la barra de tareas


        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            experimentalFeatures: true
        }
    };

    let window = new BrowserWindow(configs); // Crear una nueva ventana

    autoUpdater.checkForUpdates();

    window.loadFile("main.html"); // Cargar el archivo en la ventana
};

app.whenReady().then(createWindow);