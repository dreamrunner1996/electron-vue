const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const pkg = require('../package.json')

const devMode = pkg.env.DEV
const devUrl = `http://${pkg.env.HOST}:${pkg.env.PORT}`
const fileUrl = './dist/index.html'

const createWindow = () => {
  Menu.setApplicationMenu(null)
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'ipcRender.js')
    }
  })
  if (devMode) {
    win.webContents.openDevTools({ mode: 'detach' })
    win.loadURL(devUrl).then(() => { console.log(`dev mode is running: ${devUrl}`) })
  } else win.loadFile(fileUrl).then(() => {})
}

app.allowRendererProcessReuse = false
app.whenReady().then(() => {
  console.log('app is ready!')
  createWindow()
})
