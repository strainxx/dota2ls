const { ipcRenderer } = require('electron')

function _alert(){
    alert("NARUTO RAMEN")
}
function ext(){
    window.close()
}

function copyText(){
    ipcRenderer.send('copygh')
}

function toastthis(){
    var x = document.getElementById("toast");   
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//window.addEventListener()