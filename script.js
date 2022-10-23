$(".timeline-item").hover(function () { // Experience Блок
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

function scrollTo(element) { // Скролл при нажатии на элементы из Header'a
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

let aboutBlock = document.querySelector('.about-block')
let skillsBlock = document.querySelector('.skills-block')
let expBlock = document.querySelector('.experience-block')
let contactsBlock = document.querySelector('.contacts-block')



let aboutBtn = document.querySelector('#about-btn').addEventListener('click',()=>{
    scrollTo(aboutBlock)
})
let skillsBtn = document.querySelector('#skills-btn').addEventListener('click', () =>{
    scrollTo(skillsBlock)
})
let expBtn = document.querySelector('#exp-btn').addEventListener('click', ()=>{
    scrollTo(expBlock)
})
let contactsBtn = document.querySelector('#contacts-btn').addEventListener('click', ()=>{
    scrollTo(contactsBlock)
})

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", () => {

        closeOnClick()
    });
});

function closeOnClick() {
popup.classList.remove("open");
hamb.classList.remove("active");
body.classList.remove("noscroll");
}