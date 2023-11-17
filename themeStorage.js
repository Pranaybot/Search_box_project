const backgroundThemes = document.querySelectorAll('[name="targetgroup"]');


//store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    backgroundThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    })
}

backgroundThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})

document.onload = retrieveTheme();

