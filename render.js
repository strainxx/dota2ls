function _alert(){
    alert("NARUTO RAMEN")
}
function ext(){
    window.close()
}

function settngs(){
    window.resizeTo(-50, -50)
}

function toastthis(){
    var x = document.getElementById("toast");   
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//window.addEventListener()