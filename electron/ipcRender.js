const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    'node-machine-id': require('node-machine-id')
  }
)
