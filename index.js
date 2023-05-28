const path = require('path');
const url = require('url');
const {app, BrowserWindow, clipboard, ipcMain} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
            width: 700,
            height: 500,
            webPreferences:{
                preload: path.join(__dirname, 'render.js'),
                nodeIntegration: true,
                contextIsolation: false
            },
            autoHideMenuBar: true,
            resizable: false,
            //titleBarStyle: 'hidden',
            titleBarOverlay: {
                color: '#2f3241',
                symbolColor: '#74b1be'},
            icon: __dirname + "/img/icon.png"
    });
    win.loadFile("index.html");
    
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit();
})
console.log('Hello')

ipcMain.on('copygh', (event, arg) => {
    clipboard.writeText('https://github.com/strainxx/dota2ls')
})

function readMemory(){
    win.setSize(100, 100)
}

function getSteam(){
    //Later
}