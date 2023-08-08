document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const menuItems = document.querySelectorAll(".menu-item");
    const contentSections = document.querySelectorAll(".content > div");
    const resultContainer = document.getElementById("searchResults");

    // 章节展开逻辑
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            const submenu = menuItem.querySelector(".sub-menu");
            if (submenu) {
                submenu.classList.toggle("active");
            }
        });
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        resultContainer.innerHTML = "";

        if (searchTerm === "") {
            resultContainer.style.display = "none";
        } else {
            menuItems.forEach(function (menuItem) {
                const menuItemText = menuItem.textContent.toLowerCase();

                if (menuItemText.includes(searchTerm)) {
                    const resultItem = document.createElement("div");
                    resultItem.textContent = menuItemText;
                    resultItem.classList.add("search-result-item");
                    resultItem.addEventListener("click", function () {
                        const contentId = menuItem.querySelector(".child")?.getAttribute("data-content");
                        if (contentId) {
                            const contentDiv = document.getElementById(contentId);
                            if (contentDiv) {
                                contentSections.forEach((section) => {
                                    section.style.display = "none";
                                });
                                contentDiv.style.display = "block";
                            }
                        }
                    });

                    resultContainer.appendChild(resultItem);
                }
            });

            resultContainer.style.display = "block";
        }
    });
});
