console.log("Test 1");
document.querySelector("#id1").addEventListener("mouseover", function () {
    this.style.color = "green";
});
document.querySelector("#id1").addEventListener("mouseout", function () {
    this.style.color = "black";
});

document.querySelector("#id1").onclick = function () {
    this.textContent = "Hello";
};
document.querySelector("#id1").ondblclick = function () {
    this.textContent = "My name is Daniel";
};
window.onresize = function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
};