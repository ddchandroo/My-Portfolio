var form = document.getElementById("contactForm")


form.addEventListener("submit", function (event) {
    var email = document.getElementById("cemail").value;

    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!validRegex.test(email)) {
        alert("Email not valid!!");
        event.preventDefault();
        
    }
    else {
        alert("Message Sent!!");
    }
});