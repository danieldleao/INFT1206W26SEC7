/*
Durham College - Computer Programming and Analysis
INFT 1206 Web Development Fundamentals [Dr. Muath Alzghool]
Daniel Doro Leao
Date: 2026-04-07
Activity Name: Assignment 4 – Part 2: Image Gallery
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Creating data object
const images = [
    { filename: "images/pic1.jpg", alt: "the human eye" },
    { filename: "images/pic2.jpg", alt: "rock in waves" },
    { filename: "images/pic3.jpg", alt: "Pansies" },
    { filename: "images/pic4.jpg", alt: "egyptian image" },
    { filename: "images/pic5.jpg", alt: "leaves" }
];
