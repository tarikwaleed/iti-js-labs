var fadeDegree=1
function fadeOut(image) {
    var interval = setInterval(() => {
        if (fadeDegree <= 0) {
            clearInterval(interval)
        }
        image.setAttribute("style", `opacity:${fadeDegree}`)
        image.style.opacity=fadeDegree
        fadeDegree -= 0.1;

    }, 1000);
}

function fadeIn(image) {
    var interval = setInterval(() => {
        if (fadeDegree >= 100) {
            clearInterval(interval)
        }
        // image.setAttribute("style", `opacity:${fadeDegree/100}`)
        image.style.opacity=fadeDegree;
        fadeDegree += .1;

    }, 1000);
}