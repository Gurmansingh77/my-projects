let darkMode = document.getElementById("darkMode");

// Function to apply theme
function applyTheme(theme) {

    if (theme === "dark") {

        document.documentElement.style.setProperty("--white-color-bg", "#1F2937");
        document.documentElement.style.setProperty("--black-font-color", "white");
        document.documentElement.style.setProperty("--center-light-color", "#111827");
        document.documentElement.style.setProperty("--grey-border-color", "#374151");
        document.documentElement.style.setProperty("--blue-hover-light-color", "#374151");
        document.documentElement.style.setProperty("--input-color", "#111827");

    } else {

        document.documentElement.style.setProperty("--white-color-bg", "white");
        document.documentElement.style.setProperty("--black-font-color", "black");
        document.documentElement.style.setProperty("--center-light-color", "#F4F7F6");
        document.documentElement.style.setProperty("--grey-border-color", "#cfd0d3");
        document.documentElement.style.setProperty("--blue-hover-light-color", "#DBEAFE");
        document.documentElement.style.setProperty("--input-color", "#F8F9FB");

    }

}

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

    if (savedTheme === "dark") {
        darkMode.checked = true;
    } else {
        darkMode.checked = false;
    }

}

darkMode.addEventListener("change", function () {

    if (darkMode.checked) {

        applyTheme("dark");
        localStorage.setItem("theme", "dark");

    } else {

        applyTheme("light");
        localStorage.setItem("theme", "light");

    }

});