//Menu Open Close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
}

const header = document.querySelector('.header');
var scrollTop = document.getElementById("scrollTop")

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        header.classList.add('active');
        scrollTop.style.display = "block";
    } else{
        header.classList.remove('active');
        scrollTop.style.display = "none";
    }
}

//Hours Active
const time = () => {

    const activerow = document.querySelector('#activerow');

    const monday = document.querySelector('.monday');
    const tuesday = document.querySelector('.tuesday');
    const wednesday = document.querySelector('.wednesday');
    const thursday = document.querySelector('.thursday');
    const friday = document.querySelector('.friday');
    const saturday = document.querySelector('.saturday');
    const sunday = document.querySelector('.sunday');


    switch (new Date().getDay()) {

        case 1:
            monday.setAttribute("id", "activerow");
            break;
        case 2:
            tuesday.setAttribute("id", "activerow");
            break;
        case 3:
            wednesday.setAttribute("id", "activerow");
            break;
        case 4:
            thursday.setAttribute("id", "activerow");
            break;
        case 5:
            friday.setAttribute("id", "activerow");
            break;
        case 6:
            saturday.setAttribute("id", "activerow");
            break;
        case 0:
            sunday.setAttribute("id", "activerow");
            break;
    }

}
time();

//Send Email
function sendEmail(){
    Email.send({
        SecureToken: "14cf8656-a3ab-4101-b635-ded1481c3453",

        To : 'beautystudiobydino@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br>Message: " + document.getElementById("message").value,
    }).then(
      message => alert("Thank you! Your message was sent successfully.")
    );
}

function scrollToTop() {
    window.scrollTo(0, 0);
}