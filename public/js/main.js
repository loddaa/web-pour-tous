let lightSwitch = document.getElementsByClassName('light-theme-switch').item(0)
let lightSwitchIcon = document.getElementsByClassName('light-theme-switch').item(0).firstElementChild
let darkSwitch = document.getElementsByClassName('dark-theme-switch').item(0)
let darkSwitchIcon = document.getElementsByClassName('dark-theme-switch').item(0).firstElementChild

function darkTheme() {
    lightSwitch.classList.add('display-none')
    darkSwitch.classList.remove('display-none')
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    localStorage.setItem("theme", "dark");
}

function lightTheme() {
    lightSwitch.classList.remove('display-none')
    darkSwitch.classList.add('display-none')
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    localStorage.setItem("theme", "light");
}

document.addEventListener('click', function(e) {
    switch (e.target) {
        case lightSwitch:
        case lightSwitchIcon:
                darkTheme()
            break;
            case darkSwitch:
            case darkSwitchIcon:
                lightTheme()
            break;
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let theme = localStorage.getItem("theme");
    console.log({theme})
    switch (theme) {
        case "light":
                lightTheme()
            break;
        case "dark":
                darkTheme()
            break;
        default:
            lightTheme()
            break;
    }
})