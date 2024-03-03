const SidebarButton = document.body.querySelector(".Sidebartoggle"),
    Sidebar = document.body.querySelector(".sidebar"),
    //themes buttons
    cyberpunk_theme = document.body.querySelector(".cyberPunk_button"),
    solarPunk_theme = document.body.querySelector(".SolarPunk_button"),
    steamPunk_theme = document.body.querySelector(".SteamPunk_button"),
    inputDetection = document.body.querySelector(".SearchInput"),
    searchDefinitions = document.querySelector('.search_definitions'),
    orderby = document.querySelector('.orderby'),
    categories = document.querySelector('.categories');


SidebarButton.addEventListener("click", () => {
    Sidebar.classList.toggle("close");
});

