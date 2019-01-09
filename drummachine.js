//Variablen

let boom = document.querySelector("#boom");
let clap = document.querySelector("#clap");
let hihat = document.querySelector("#hihat");
let kick = document.querySelector("#kick");
let openhat = document.querySelector("#openhat");
let ride = document.querySelector("#ride");
let snare = document.querySelector("#snare");
let tink = document.querySelector("#tink");
let tom = document.querySelector("#tom");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let h = document.querySelector("#h");
let k = document.querySelector("#k");
let o = document.querySelector("#o");
let r = document.querySelector("#r");
let s = document.querySelector("#s");
let d = document.querySelector("#d");
let t = document.querySelector("#t");

//Funktionen 

document.addEventListener('keydown', playSound);  //Event Listener für das ganze Programm

function playSound(event) {
    var x = event.key;
    if (x == "b" || x == "B") { 
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        boom.currentTime=0;
        boom.play();
        b.classList.add("effect");
    } else if (x == "c" || x == "C"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        clap.currentTime=0;
        clap.play();
        c.classList.toggle("effect");
    } else if (x == "h" || x == "H"){
        b.classList=""; 
        c.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        hihat.currentTime=0;
        hihat.play();
        h.classList.toggle("effect");
    } else if (x == "k" || x == "K"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        kick.currentTime=0;
        kick.play(); 
        k.classList.toggle("effect");
    } else if (x == "o" || x == "O"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        openhat.currentTime=0;
        openhat.play();
        o.classList.toggle("effect");
    } else if (x == "r" || x == "R"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        s.classList=""; 
        d.classList=""; 
        t.classList=""; 
        ride.currentTime=0;
        ride.play();
        r.classList.toggle("effect");
    } else if (x == "s" || x == "S") {
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        d.classList=""; 
        t.classList=""; 
        snare.currentTime=0;
        snare.play();
        s.classList.toggle("effect");
    }else if (x == "d" || x == "D"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        t.classList=""; 
        tink.currentTime=0;
        tink.play();
        d.classList.toggle("effect");
    } else if (x == "t" || x == "T"){
        b.classList=""; 
        c.classList=""; 
        h.classList=""; 
        k.classList=""; 
        o.classList=""; 
        r.classList=""; 
        s.classList=""; 
        d.classList=""; 
        tom.currentTime=0;
        tom.play(); 
        t.classList.toggle("effect");
    } else {
        console.log("Please press one of the keys: b,c,h,k,o,r,d,t"); 
    }
}