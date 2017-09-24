var column = document.getElementById('i_column');
var modal = document.getElementById('i_modal');
var video = document.getElementById('i_video');
var carousel = document.getElementById('i_carousel');
var body = document.getElementsByTagName('BODY');


var getPlace = function(){
    return window.scrollY;
}

//code from url: https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
//with several changes(the original function can't get to the position precisely)
function scrollTo(element, dif, duration) {
    if (duration <= 0) return;
    var difference = dif;
    var perTick = 1;

    setTimeout(function() {

        if(difference > element.scrollTop){
            for(var i = 0; i < 30; i++){
            element.scrollTop = element.scrollTop + perTick;
            if (difference <= element.scrollTop) return;
            }
        }

        else if(difference < element.scrollTop){
            for(var i = 0; i < 20; i++){
            element.scrollTop = element.scrollTop - perTick;
            if (difference >= element.scrollTop) return;
        }
        }
        else return;
        scrollTo(element, difference, duration - 10);
    }, 10);
}

var remove1 = function(){
    column.classList.remove("selected");
    modal.classList.remove("selected");
    video.classList.remove("selected");
    carousel.classList.remove("selected");
};

column.onclick = function(){
    scrollTo(document.body, 300, 2000);
    //remove1();
    //this.classList.add("selected");

};

modal.onclick = function(){
    scrollTo(document.body, 580, 2000);
    //remove1();
    //this.classList.add("selected");
};

video.onclick = function(){
    scrollTo(document.body, 830, 2000);
    //remove1();
    //this.classList.add("selected");
};

carousel.onclick = function(){
    scrollTo(document.body, 1400, 2000);
    //remove1();
    //this.classList.add("selected");
};


window.addEventListener('scroll', function() {
    var nav = document.getElementById("navbar");
    var place = getPlace();
    if(place > 300){
        nav.classList.remove("navbar");
        nav.classList.add("navbar_s");
    }
    else{
        nav.classList.add("navbar");
        nav.classList.remove("navbar_s");
    }

    if(place<580){remove1(); column.classList.add("selected");}
    else if(place<830){remove1(); modal.classList.add("selected");}
    else if(place<1400){remove1(); video.classList.add("selected");}
    else {remove1(); carousel.classList.add("selected");}
});



var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

box1.onclick = function(){
    document.getElementById("window").classList.remove("hidden");
}

box2.onclick = function(){
    document.getElementById("window").classList.remove("hidden");
}

box3.onclick = function(){
    document.getElementById("window").classList.remove("hidden");
}

box4.onclick = function(){
    document.getElementById("window").classList.remove("hidden");
}

document.getElementById("close").onclick = function(){
     document.getElementById("window").classList.add("hidden");
}

function getCss(elem){
    return window.getComputedStyle(elem, null).getPropertyValue("background-color");
}

document.getElementById("left_arrow").onclick = function(){
    document.getElementById("slides").classList.add("move_back");
        setTimeout(function(){
            var temp = getCss(document.getElementById("slide2"));
            //console.log(temp);
            document.getElementById("slide2").style.backgroundColor = getCss(document.getElementById("slide3"));
            document.getElementById("slide3").style.backgroundColor = getCss(document.getElementById("slide4"));
            document.getElementById("slide4").style.backgroundColor = getCss(document.getElementById("slide1"));
            document.getElementById("slide1").style.backgroundColor = temp;
            document.getElementById('slides').classList.remove("move_back");
        },200);
}



document.getElementById("right_arrow").onclick = function(){
document.getElementById("slides").classList.add("move_right");
    setTimeout(function(){
        var temp = getCss(document.getElementById("slide2"));
        //console.log(temp);
        document.getElementById("slide2").style.backgroundColor = getCss(document.getElementById("slide1"));
        document.getElementById("slide1").style.backgroundColor = getCss(document.getElementById("slide4"));
        document.getElementById("slide4").style.backgroundColor = getCss(document.getElementById("slide3"));
        document.getElementById("slide3").style.backgroundColor = temp;
        document.getElementById('slides').classList.remove("move_right");
    },200);
}

//carousel
