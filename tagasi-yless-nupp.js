window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        var documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        // Adjust the value (200) as needed to control when the button appears
        if (documentHeight - (scrollPosition + windowHeight) < 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    } else {
        btn.style.display = "none";
    }
}

// Smooth scroll to the top
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//Autor Chat GPT