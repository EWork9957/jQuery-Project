//Accordion~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
//Accordion 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
//Progress Bar~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Move 1
var i = 0;
function move1() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar1");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 99) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}
//Move 2
var i = 0;
function move2() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar2");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 99) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}
//Move 3
var i = 0;
function move3() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar3");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 99) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}
//Move 4
var i = 0;
function move4() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar4");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 99) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}