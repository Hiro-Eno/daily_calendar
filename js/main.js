'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let day = new Date().getDate();

const imagePath = makeImagePath(day);

const calendarImage = document.getElementById("calendar");
calendarImage.src = imagePath;

function makeImagePath(day){
    const day_ = day < 10 ? `0${day}` : day;
    return `img/${day_}.jpg`;
}

function back(){
    day = day === 1 ? 31 : day - 1;
    const backImagePath = makeImagePath(day);
    const image = document.getElementById("calendar");
    image.src= backImagePath
}

function forward(){
    day = day === 31 ? 1 : day + 1;
    const forwardImagePath = makeImagePath(day);
    const image = document.getElementById("calendar");
    image.src= forwardImagePath
}