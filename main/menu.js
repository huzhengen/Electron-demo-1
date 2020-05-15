const { Menu, BrowserWindow } = require('electron')

var template = [
  {
    label: '足球',
    submenu: [
      {
        label: '英超',
        click: () => {
          win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: { nodeIntegration: true }
          })
          win.loadFile('premierLeague.html')
          win.on('closed', () => {
            win = null
          })

        }
      },
      { label: '西甲' }
    ]
  },
  {
    label: '篮球',
    submenu: [
      { label: 'NBA' },
      { label: 'CBA' }
    ]
  }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)