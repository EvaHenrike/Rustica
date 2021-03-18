function navigation_mobile() {
    const header =
        document.querySelector(".header1");

    const nav_mobil =
        document.querySelector(".menu_button_div");



    const observerCallback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav_mobil.classList.remove("scroll");
            } else {
                nav_mobil.classList.add("scroll");
            }
        });
    };

    const observerOptions = { threshold: 0.1 };

    let observer = new
        IntersectionObserver(observerCallback, observerOptions);

    observer.observe(header);
}

export default navigation_mobile;