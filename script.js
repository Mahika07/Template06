
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const typer = (el) => {

    const texts = JSON.parse(el.dataset.rotate);
    const period = +el.dataset.period || 1000;
    const speed = +el.dataset.speed || 200;
    const textsTot = texts.length;

    let tx = 0;
    let ch = 0;
    let chTot = 0;
    let text = ""

    const typeIt = () => {
        if (ch > chTot) return setTimeout(typeText, period);
        el.textContent = text.substring(0, ch++);
        setTimeout(typeIt, rand(Math.min(60, speed - 80), speed + 80));
    };


    const typeText = () => {
        ch = 0;
        text = texts[tx];
        chTot = text.length;

        typeIt();

        tx += 1;
        tx %= texts.length;
    };

    typeText();

};

document.querySelectorAll("[data-rotate]").forEach(typer);

// function for project content
const images = [
    './images/project01.jpg',
    './images/project02.jpg',
    './images/project03.jpg'
];
const heading = [
    'Project 1',
    'Project 2',
    'Project 3'
]
const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultricies felis arcu, ac rhoncus felis pharetra eu.Praesent ultrices, mi ut ultrices ullamcorper, metus nulla scelerisque felis, quis maximus nunc massa vitae libero.Nulla maximus, elit et consequat ultricies, dui leo iaculis nibh, quis sagittis nulla orci ac orci.Pellentesque vitae purus non sem porta pellentesque.Integer egestas nulla molestie leo aliquet tempor.Morbi vel efficitur elit.Donec blandit libero in orci posuere, id hendrerit lacus rhoncuse',
    'Pellentesque vestibulum sapien ut mi tempus vulputate eget quis quam. Ut congue massa vitae purus posuere mollis. Donec eleifend, eros at maximus laoreet, tellus urna faucibus eros, ut tincidunt justo tellus vel urna. Pellentesque quis interdum tortor. In varius mi quis augue porta rhoncus. Vivamus nunc enim, vulputate convallis ante ut, ultrices semper erat. Praesent sollicitudin eros vel mauris consequat, eget tincidunt ligula convallis. In aliquet nisl et feugiat sodales. ',
    'Aliquam facilisis odio at nibh ornare laoreet non aliquet sem. Phasellus ac sodales neque. Donec faucibus dui leo, vel laoreet dolor congue vel. Morbi ullamcorper neque lectus, eget fringilla arcu blandit eu. Suspendisse accumsan nulla at sapien feugiat cursus. Mauris tincidunt, libero eget elementum porta, risus libero ullamcorper elit, ac pharetra tellus ex at dolor. Nunc quis blandit nulla. Proin id ultrices nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus orci arcu, facilisis varius consectetur sed, molestie eu urna. Fusce sit amet odio sem. '
]
const links = [
    '#',
    '#',
    '#'
]
let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const project_name = document.getElementById('project-name');
const project_desc = document.getElementById('project-desc');
const project_links = document.getElementById('project-links');
const prevBtn = document.getElementById('slide-prv');
const nextBtn = document.getElementById('slide-nxt');

function showImage(index) {
    sliderImage.src = images[index];
    project_name.innerHTML = heading[index];
    project_desc.innerHTML = description[index]
    project_links.href = links[index];
}

prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Initialize with the first image
showImage(currentIndex);
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})

