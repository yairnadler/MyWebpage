"use strict";

const menu  = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");


/** Opens the menu bar */
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/** Jump to home section */
document.getElementById("jump-home").addEventListener("click", function(event) {
    event.preventDefault();
    let home = document.getElementById("home");
    let yOffSet = -100;
    let y = home.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/** Jump to CV section */
document.getElementById("jump-CV").addEventListener("click", function(event) {
    event.preventDefault();
    let CV = document.getElementById("CV");
    let yOffSet = -60;
    let y = CV.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/** Jump to What Else section */
document.getElementById("jump-WhatElse").addEventListener("click", function(event) {
    event.preventDefault();
    let WhatElse = document.getElementById("WhatElse");
    let yOffSet = -60;
    let y = WhatElse.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/** Jump to Contact section */
document.getElementById("jump-contact").addEventListener("click", function(event) {
    document.body.scrollIntoView({behavior: "smooth", block: "end"});
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/** Opens CV pdf on click of the CV icon */
document.getElementById("cv-icon").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("files/CV.pdf");
});

/** Opens github page on click of the github icon */
document.getElementById("github-icon").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://github.com/yairnadler?tab=repositories");
});

/** Opens linkedin page on click of linkedin icon */
document.getElementById("linkedin-icon").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/yair-nadler-90426223a/");
});

/** Opens whatsapp conversation on click of whatsapp icon */
document.getElementById("whatsapp-icon").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://wa.me/+972507503335?text=Hi there");
});


/** Opens form to fill fields to send an email */
document.getElementById("email-icon").addEventListener("click", function(event) {
    document.querySelector(".popup").style.display = "flex";
});

/** Close the email me form */
document.getElementById("close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

/** Send email button */
document.getElementById("send").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
        alert("Please fill all the fields");
        return;
    }
    else if (!isValidEmail(email)) {
        alert("Please enter a valid email");
        return;
    }
    else {
        sendEmail();
        document.querySelector(".popup").style.display = "none";
    }

});

/** Gets the values from the form fields and sends them
 * to the emailjs server to send an email
 */
function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceId = "service_9sb3kke";
    const templateId = "template_koxlcr9";

    emailjs.send(serviceId, templateId, params).then((res) => {
        document.getElementById("name").value = ""; 
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Email successfully sent!");
    })
    .catch((err) => console.log(err));
}

/** Checks if the form fields are empty */
function isEmpty(str) {
    return (str === null || str === "");
}

/** Checks if the email is valid */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
