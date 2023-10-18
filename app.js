'use strict'

functionfindlyrics(){

    $.get("https://api.lyrics.ovh/v1/artist/title"+document.getElementById("artist").value+"/"document.getElementById("title").value,
    function(data){
        document.getElementById("output").innerHTML=data.lyrics.replace(new RegExp("\n","g"),"<br>")
    })
}