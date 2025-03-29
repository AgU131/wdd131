
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    
    document.getElementById("lastModified").textContent = document.lastModified;

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuToggle.textContent = "☰";
        } else {
            menu.style.display = "block";
            menuToggle.textContent = "✖";
        }
    });
});
