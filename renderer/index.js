var fs = require('fs');

window.onload = function () {
  var btn = this.document.querySelector('#btn')
  var person = this.document.querySelector('#person')
  btn.onclick = function () {
    fs.readFile('person.txt', (err, data) => {
      person.innerHTML = data
    })
  }
} 