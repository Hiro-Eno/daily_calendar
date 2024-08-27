'use strict'

let day = new Date().getDate();

const imagePath = makeImagePath(day);

const calendarImage = document.getElementById("calendar");
calendarImage.src = imagePath;

function makeImagePath(day){
    const day_ = day < 10 ? `0${day}` : day;
    return `img/${day_}.jpg`;
}

function previous(){
    day = day === 1 ? 31 : day - 1;
    const preImagePath = makeImagePath(day);
    const image = document.getElementById("calendar");
    image.src= preImagePath
}

function next(){
    day = day === 31 ? 1 : day + 1;
    const nextImagePath = makeImagePath(day);
    const image = document.getElementById("calendar");
    image.src= nextImagePath
}
