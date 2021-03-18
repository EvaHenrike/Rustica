function navigation() {
    const header =
        document.querySelector(".header1");

    const nav =
        document.querySelector(".navigation_desktop");



    const observerCallback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav.classList.remove("scrolling");
            } else {
                nav.classList.add("scrolling");
            }
        });
    };

    const observerOptions = { threshold: 0.1 };

    let observer = new
        IntersectionObserver(observerCallback, observerOptions);

    observer.observe(header);
}

export default navigation;
