/*
Durham College - Computer Programming and Analysis
INFT 1206 Web Development Fundamentals [Dr. Muath Alzghool]
Daniel Doro Leao
Date: 2026-03-18
Activity Name: Assignment 4 – Part 1: Silly Story Generator
*/

// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const locations = ["the soup kitchen", "Disneyland", "the White House"];
const actions = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and slithered away"
];

// Partial return random string function

function returnRandomStoryString() {
    // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
    const randomCharacter = randomValueFromArray(characters);
    const randomLocation = randomValueFromArray(locations);
    const randomAction = randomValueFromArray(actions);

    let storyText = "It was 94 Fahrenheit outside, so ";
    storyText += randomCharacter;
    storyText += " went for a walk. When they got to ";
    storyText += randomLocation;
    storyText += ", they stared in horror for a few moments, then ";
    storyText += randomAction;
    storyText += ". Bob saw the whole thing, but was not surprised — ";
    storyText += randomCharacter;
    storyText += " weighs 300 pounds, and it was a hot day.";

    return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let nStory = returnRandomStoryString();

    if (customName.value !== "") {
        const name = customName.value;
        nStory = nStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286);
        const temperature = Math.round(94 * (5 / 9));
        nStory = nStory.replace("300 pounds", `${weight} stone`);
        nStory = nStory.replace("94 Fahrenheit", `${temperature} Celsius`);
    }

    // TODO: replace "" with the correct expression
    story.textContent = nStory;
    story.style.visibility = "visible";
}