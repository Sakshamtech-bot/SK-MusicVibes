// DARK MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
// SEARCH
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim();
    if (searchText === "") {
        alert("Please enter a song, artist, or genre.");
    } else {
        alert("Searching for: " + searchText);
    }
});
// PLAY BUTTONS
const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === "▶") {
            button.textContent = "⏸";
        } else {
            button.textContent = "▶";
        }
    });
});
// LISTEN NOW BUTTON
const listenButton = document.querySelector(".listen-btn");
listenButton.addEventListener("click", function () {
    alert("🎵 Enjoy your music! Keep listening and keep vibing.");
});
// ENTER KEY SEARCH
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});