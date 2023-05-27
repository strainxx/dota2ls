var idc = require('timers/promises').setTimeout;

var exec = require('child_process').execFile;
var cmd = require('child_process').exec;

var run = function(hack){
   console.log("Started app");
   exec(hack, function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });
    return true;
}
run('omagad.exe');

console.log('NYA');

var readMemory = function(what){
    cmd(`python ./hacks/somehack.py ${what}`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}

setTimeout(function(){ readMemory() }, 3000);

module.exports = {
    run: run,
    rmem: readMemory
}