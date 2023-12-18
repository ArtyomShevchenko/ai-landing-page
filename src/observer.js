const lazyImages = document.querySelectorAll('.slide-bottom--hidden')

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.classList.add("slide-bottom--visible")
            observer.unobserve(entry.target)
        }
        // else {
        //     entry.target.src = entry.target.classList.remove("slide-left--visible")
        // }
    })
}

const options = {
    rootMargin: '40px',
    threshold: 0,
}

const observer = new IntersectionObserver(callback, options)

lazyImages.forEach((image) => observer.observe(image))