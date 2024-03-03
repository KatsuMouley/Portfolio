const SidebarButton = document.body.querySelector(".Sidebartoggle"),
    Sidebar = document.body.querySelector(".sidebar"),
    //themes buttons
    Remove_themes = document.body.querySelector(".Remove_themes"),
    cyberpunk_theme = document.body.querySelector(".cyberPunk_button"),
    solarPunk_theme = document.body.querySelector(".SolarPunk_button"),
    inputDetection = document.body.querySelector(".SearchInput"),
    searchDefinitions = document.querySelector('.search_definitions'),
    orderby = document.querySelector('.orderby'),
    categories = document.querySelector('.categories');


SidebarButton.addEventListener("click", () => {
    Sidebar.classList.toggle("close");
});

cyberpunk_theme.addEventListener("click", () => {
    document.querySelector("body").style.background = "url('themeImages/theme(1).png') center center / cover";
});
solarPunk_theme.addEventListener("click", () => {
    document.querySelector("body").style.background = "url('themeImages/theme(2).webp') center center / cover";
});
Remove_themes.addEventListener("click", () => {
    document.querySelector("body").style.background = " #001D31";
});