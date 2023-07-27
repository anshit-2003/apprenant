/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_psdoptb','template_fxqozmq', '#contact-form', 'rYPeEeKCDYDuhiATF')
    .then(()=>{
        contactMessage.textContent = "Message Sent Successfully!"

        setTimeout(()=>{
            contactMessage.textContent='';
        },5000)

        contactForm.reset()
    },()=>{
        contactMessage.textContent = "Message Not Sent!"
    })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
    const scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350
        ? scrollup.classList.add("show-scroll")
        : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(
            '.nav__menu a[href*="' + sectionId + '"]'
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (sectionClass) {
                sectionClass.classList.add("active-link");
            }
        } else {
            if (sectionClass) {
                sectionClass.classList.remove("active-link");
            }
        }
    });
};

// Call the function on scroll
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : "top",
    distance : "60px",
    duration : 2500,
    delay : 400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin : 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin : 'left'})
sr.reveal(`.about__image, .skills__content`, {origin : 'left'})
sr.reveal(`.services__card, .projects__card`, {interval : 100})
