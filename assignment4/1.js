function fadeOut(image) {
    var fadeDegree = 1.0
    var interval = setInterval(() => {
        if (fadeDegree <= 0.0) {
            clearInterval(interval)
        }
        // image.setAttribute("style", `opacity:${fadeDegree}`)
        image.style.opacity = fadeDegree
        fadeDegree -= 0.1;

    }, 1000);
}

function fadeIn(image) {
    var fadeDegree = 0.0
    var interval = setInterval(() => {
        if (fadeDegree >= 1) {
            clearInterval(interval)
        }
        // image.setAttribute("style", `opacity:${fadeDegree/100}`)
        image.style.opacity = fadeDegree;
        fadeDegree += .1;

    }, 1000);
}