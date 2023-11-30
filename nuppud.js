//kaardi_nuppud
var currentLocation = 0; 
        var locations = [
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.4744972843464!2d26.722176412337006!3d58.38539888610982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb37b2e8a6ef3d%3A0xb1c21ea409a3845f!2sTartu%20%C3%9Clikooli%20Delta%20keskus!5e0!3m2!1set!2see!4v1699810918712!5m2!1set!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.430140137354!2d26.72386083959835!3d58.386146881804116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e8a66f2bff%3A0x97fc3b22119ce19c!2sKonsum!5e0!3m2!1set!2see!4v1699811464918!5m2!1set!2see"
            // Add URLs for more locations
        ];

        function switchLocation(index) {
            currentLocation = index;
            var mapIframe = document.getElementById('locationMap');
            mapIframe.src = locations[currentLocation];
        }
//script by Chat GPT
//vordlus_nuppud
function hindl(newText) {
    document.getElementById('hindl').innerText = newText;
}

function nimil(newText) {
    document.getElementById('nimil').innerText = newText
}

function hindr(newText) {
    document.getElementById('hindr').innerText = newText;
}

function nimir(newText) {
    document.getElementById('nimir').innerText = newText
}