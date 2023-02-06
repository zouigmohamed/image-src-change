let btn = document.getElementsByTagName("button");
let picture = document.getElementById("pic");

function change(){

    x= Math.floor(Math.random() * 54)
    newSrc = "image/"+x+".jpg";
    picture.src=newSrc;
}