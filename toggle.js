const themeToggleButton = document.querySelector('.theme_button');
const themeContainer = document.querySelector('.leftside');

themeToggleButton.addEventListener('click', function(event) {
    if (themeContainer.style.visibility === "hidden") {
        themeContainer.style.visibility = "visible";
    } else {
        themeContainer.style.visibility = "hidden";
    }
});