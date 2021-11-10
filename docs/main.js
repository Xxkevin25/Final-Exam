let progress = document.getElementById('pro');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

window.addEventListener("scroll", function () {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0)
})
