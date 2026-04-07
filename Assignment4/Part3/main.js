/*
Durham College - Computer Programming and Analysis
INFT 1206 Web Development Fundamentals [Dr. Muath Alzghool]
Daniel Doro Leao
Date: 2026-03-18
Activity Name: Assignment 4 – Part 3: Bounce Balls
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}