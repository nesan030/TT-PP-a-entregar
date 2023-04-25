

var typed = new Typed(".type", {
    strings: ["frontend", "bakend", "Full stack"],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true,
});

// const typed = new Typed(".type", {
//     strings: ["Frontend", "bakend", " Full stak"]

// });

// var typed = new Typed('.type', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
// });

document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('');

themeButtons.forEach(color => {

    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty("--main-color", data - Color);
    });
});

