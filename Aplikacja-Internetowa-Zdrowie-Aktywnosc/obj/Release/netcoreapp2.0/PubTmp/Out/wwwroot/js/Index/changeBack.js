﻿var images =[
    "../images/Index/Background/gym01.jpg",
    "../images/Index/Background/gym02.jpg",
    "../images/Index/Background/gym03.jpg",
    "../images/Index/Background/gym05.jpg",
    "../images/Index/Background/gym06.jpg",
    "../images/Index/Background/gym07.jpg",
    "../images/Index/Background/gym08.jpg",
    "../images/Index/Background/gym09.jpg",
    "../images/Index/Background/gym10.jpg",
    "../images/Index/Background/gym11.jpg",
    "../images/Index/Background/gym12.jpg",
    "../images/Index/Background/gym13.jpg",
    "../images/Index/Background/gym14.jpg",
    "../images/Index/Background/gym15.jpg",
    "../images/Index/Background/gym16.jpg",
    "../images/Index/Background/gym17.jpg",
    "../images/Index/Background/gym18.jpg",
    "../images/Index/Background/gym19.jpg",
    "../images/Index/Background/gym20.jpg",
    "../images/Index/Background/gym21.jpg",
    "../images/Index/Background/gym22.jpg",
    "../images/Index/Background/gym23.jpg",
    "../images/Index/Background/gym24.jpg",
    "../images/Index/Background/gym25.jpg",
    "../images/Index/Background/gym26.jpg",
    "../images/Index/Background/gym27.jpg",
    "../images/Index/Background/gym28.jpg",
    "../images/Index/Background/gym29.jpg",
    "../images/Index/Background/gym30.jpg",
    "../images/Index/Background/gym31.jpg",
    "../images/Index/Background/gym32.jpg",
    "../images/Index/Background/gym33.jpg",
    "../images/Index/Background/gym34.jpg",
    "../images/Index/Background/gym35.jpg",
    "../images/Index/Background/gym36.jpg",
    "../images/Index/Background/gym37.jpg",
    "../images/Index/Background/gym38.jpg",
    "../images/Index/Background/gym39.jpg",
    "../images/Index/Background/gym40.jpg",
    "../images/Index/Background/gym41.jpg",
    "../images/Index/Background/gym42.jpg",
    "../images/Index/Background/gym43.jpg",
    "../images/Index/Background/gym44.jpg",
    "../images/Index/Background/gym45.jpg",
    "../images/Index/Background/gym46.jpg",
    "../images/Index/Background/gym47.jpg",
    "../images/Index/Background/gym48.jpg",
    "../images/Index/Background/gym49.jpg",
    "../images/Index/Background/gym50.jpg",
    "../images/Index/Background/gym51.jpg",
    "../images/Index/Background/gym52.jpg",
    "../images/Index/Background/gym53.jpg",
    "../images/Index/Background/gym54.jpg",
    "../images/Index/Background/gym55.jpg"
]

var imageHead = document.getElementById("hero");
var i = 0;

// here all images loaded, do your stuff
setInterval(function () {
    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    //imageHead.style.backgroundImage = "url(" + images[Math.floor(Math.random() * 54) + 0] + ")";
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}, 5000);