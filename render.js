const { ipcRenderer } = require('electron')

let optimize = false;

function addStars(type){
    if (type){
        document.getElementById('star').innerHTML = 
        ` ${ipcRenderer.sendSync('getStars')}\
        <i class="ri-star-fill"></i>`;
    } else {
        document.getElementById('star').innerHTML = '';
    }
}

function copyText(){
    ipcRenderer.send('copygh');
}

function sumbit(){
    if (document.getElementById('opt').checked){
        optimize = true;
        alert('YEs')
    } else {
        optimize = false;
        alert('no')
    }
}

function toastthis(){
    var x = document.getElementById("toast");   
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//window.addEventListener()