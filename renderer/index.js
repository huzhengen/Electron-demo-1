const { remote, shell } = require('electron')

var rigthTemplate = [
  { label: '复制' },
  { label: '粘贴' },
]

var m = remote.Menu.buildFromTemplate(rigthTemplate)

window.addEventListener('contextmenu', function (e) {
  //阻止当前窗口默认事件
  e.preventDefault();
  //把菜单模板添加到右键菜单
  m.popup({ window: remote.getCurrentWindow() })

})

var aHref = document.querySelector('#aHref')

aHref.onclick = function (e) {
  e.preventDefault()
  var href = this.getAttribute('href')
  shell.openExternal(href)
}