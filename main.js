Array.prototype.forEach.call(document.getElementsByClassName("no-text-select"), function (el) {
    el.style = "user-select: text;"
});