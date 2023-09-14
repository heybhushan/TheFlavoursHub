let fullimgBox = document.getElementById("fullimgBox");
let fullimg = document.getElementById("fullimg")
function openfullimg(pic) {
    fullimgBox.style.display = "flex";
    fullimg.src = pic;
}
function closefullimg() {
    fullimgBox.style.display = "none";
}

function More2(){
    let a = document.getElementById("invisible-1")
    let b = document.getElementById("btn-2")
    if (a.style.display == "none") {
        a.style.display = "block"
        b.innerHTML="Read Less"
    }
    else {
        a.style.display = "none"
        b.innerHTML="Read More"
    }
}
function More3(){
    let a = document.getElementById("invisible-2")
    let b = document.getElementById("btn-3")
    if (a.style.display == "none") {
        a.style.display = "block"
        b.innerHTML="Read Less"
    }
    else {
        a.style.display = "none"
        b.innerHTML="Read More"
    }
}
function More4(){
    let a = document.getElementById("invisible-3")
    let b = document.getElementById("btn-4")
    if (a.style.display == "none") {
        a.style.display = "block"
        b.innerHTML="Read Less"
    }
    else {
        a.style.display = "none"
        b.innerHTML="Read More"
    }
}
function More5(){
    let a = document.getElementById("invisible-4")
    let b = document.getElementById("btn-5")
    if (a.style.display == "none") {
        a.style.display = "block"
        b.innerHTML="Read Less"
    }
    else {
        a.style.display = "none"
        b.innerHTML="Read More"
    }
}