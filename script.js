const SidebarButton = document.body.querySelector(".Sidebartoggle"), Sidebar = document.body.querySelector(".sidebar");

SidebarButton.addEventListener("click", () => {
    Sidebar.classList.toggle("close");
});

