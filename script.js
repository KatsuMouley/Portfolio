const SidebarButton = document.body.querySelector(".Sidebartoggle"),
    Sidebar = document.body.querySelector(".sidebar"),
    //themes buttons
    cyberpunk_theme = document.body.querySelector(".cyberPunk_button"),
    solarPunk_theme = document.body.querySelector(".SolarPunk_button"),
    steamPunk_theme = document.body.querySelector(".SteamPunk_button")
    ;

SidebarButton.addEventListener("click", () => {
    Sidebar.classList.toggle("close");
});

