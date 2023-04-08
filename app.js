'use strict';

const w = document.querySelector('.w');
const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');


const playW = new Audio('/sounds/tom-1.mp3');
const playA = new Audio('/sounds/tom-2.mp3');
const playS = new Audio('/sounds/tom-3.mp3');
const playD = new Audio('/sounds/tom-4.mp3');
const playJ = new Audio('/sounds/snare.mp3');
const playK = new Audio('/sounds/crash.mp3');
const playL = new Audio('/sounds/kick-bass.mp3');

// WHEN CLICK THE BUTTON 
w.addEventListener('click', function() {
   playW.play();
})

a.addEventListener('click', function() {
    playA.play();
 })

s.addEventListener('click', function() {
    playS.play();
 })

d.addEventListener('click', function() {
    playD.play();
 })

j.addEventListener('click', function() {
    playJ.play();
 })

k.addEventListener('click', function() {
    playK.play();
 })

l.addEventListener('click', function() {
    playL.play();
 })



// WHEN PRESS THE KEY 
document.addEventListener('keydown', function(event) {

    switch (event.code) {

        case 'KeyW':
            playW.play();
            break;
        case 'KeyA':
                playA.play();
                break;
        case 'KeyS':
                playS.play();
                break;
        case 'KeyD':
                playD.play();
                break;
        case 'KeyJ':
                playJ.play();
                break;
        case 'KeyK':
                playK.play();
                break;
        case 'KeyL':
                playL.play();
                break;
        default:
                break;
       
    }
 })

