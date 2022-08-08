const $nav = document.querySelector(".main-nav");
const $openNavBtn = document.querySelector(".main-nav-open-btn");

document.body.onclick = (e) => {
    if (e.target === $openNavBtn) {
        $nav.classList.add("main-nav--active");
    } else {
        $nav.classList.remove("main-nav--active");
    }
};
