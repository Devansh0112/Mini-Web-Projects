let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        let content = entry.target.querySelector('.content');
        if (entry.isIntersecting) {
            content.style.transform = 'rotate(0deg)';
            content.style.opacity = '1';
        }
        else {
            content.style.transform = 'rotate(360deg)';
            content.style.opacity = '0';
        }
    })
}

const observer = new IntersectionObserver(callback, options);

const target = document.querySelectorAll(".section");

target.forEach(item => {
    observer.observe(item);
});