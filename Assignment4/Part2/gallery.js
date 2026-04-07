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
    { filename: "pic1.jpg", alt: "the human eye" },
    { filename: "pic2.jpg", alt: "rock in waves" },
    { filename: "pic3.jpg", alt: "Pansies" },
    { filename: "pic4.jpg", alt: "egyptian image" },
    { filename: "pic5.jpg", alt: "leaves" }
];

// Looping through images and baseURL of the images
const baseURL = "";

for (const image of images) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", baseURL + image.filename);
    newImage.setAttribute("alt", image.alt);
    newImage.tabIndex = 0;
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", updateDisplayedImage);
    newImage.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            updateDisplayedImage.call(newImage);
        }
    });
}
// Function to update the displayed image
function updateDisplayedImage() {
    displayedImage.setAttribute("src", this.getAttribute("src"));
    displayedImage.setAttribute("alt", this.getAttribute("alt"));
}
// Function to toggle the darken class on the overlay
btn.addEventListener("click", () => {
    if (btn.textContent === "Darken") {
        overlay.classList.add("darken");
        btn.textContent = "Lighten";
    } else {
        overlay.classList.remove("darken");
        btn.textContent = "Darken";
    }
});