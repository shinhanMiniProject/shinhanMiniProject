// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const fadeImages = document.querySelectorAll(".image");
    const mainwrapContent = document.querySelectorAll(".fadeIn");
    const menuItems = document.querySelectorAll(".main_menu");
    const currentPage = window.location.pathname.split("/").pop();

    menuItems.forEach(function (menuItem) {
        if (menuItem.getAttribute("href") === currentPage) {
            menuItem.classList.add("underline");
        }
    })
    // 로딩 시 최초 애니메이션
    function fadeInOnLoad() {
        mainwrapContent.forEach(function(c) {
            c.style.opacity = "1";
        })
        fadeImages[0].style.opacity = "1";
        fadeImages[0].style.transform = "translateY(0)";
        fadeImages[1].style.opacity = "1";
        fadeImages[1].style.transform = "translateY(0)";
    }

    // 메인 메뉴 선택 효과
    function activateMenuLine() {
        menuItems.forEach(function (item) {
            item.classList.remove("underline");
        });
        const page = this.getAttribute("data-page");
        const url = `../work/${page}.html`;
        window.location.href = url;
   }

    // 스크롤 시 적용되는 애니메이션
    function fadeInOnScroll() {
        fadeImages.forEach(function (image) {
            const bottom_of_element = image.offsetTop + image.offsetHeight/2;
            const bottom_of_window = window.scrollY + window.innerHeight;

            if (bottom_of_window > bottom_of_element) {
                image.style.opacity = "1";
                image.style.transform = "translateY(0)";
            }
        });
    }

    fadeInOnLoad();
    window.addEventListener("scroll", fadeInOnScroll);
    menuItems.forEach(function (item) {
        item.addEventListener("click", activateMenuLine);
    });
});