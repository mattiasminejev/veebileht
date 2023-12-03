var currentLocation = 0; 
        var locations = [
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8366.613928295701!2d26.7315953!3d58.3823806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36dd6ae4578b%3A0x2259f770c68c040e!2s%C3%9Cli%C3%B5pilaselamu%20Raatuse%2022!5e0!3m2!1sen!2see!4v1701380225610!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.824735925583!2d26.7373686!3d58.36262689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb372eefa806a5%3A0xe34b8dddcaf4924f!2sPurde%2027%2C%2050106%20Tartu!5e0!3m2!1sen!2see!4v1701380380101!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.630681492615!2d26.7282726!3d58.3827651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e79aba9cc3%3A0x9345654a1a9de82b!2sNarva%20mnt%2025%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380484318!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.1258458153734!2d26.716814312540656!3d58.37441448698034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb371ffbeb1637%3A0x15afbda8afa607df!2sPepleri%2014%2C%2051003%20Tartu!5e0!3m2!1sen!2see!4v1701380639134!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.5651908205327!2d26.7273475!3d58.38386949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e7bf5d922b%3A0x239d7ecb60742db2!2sNarva%20mnt%2027%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380702694!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.128413249214!2d26.71039741254064!3d58.3743711869837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb371e4f567e39%3A0x5b4c52be62d0a663!2sTiigi%2014%2C%2050410%20Tartu!5e0!3m2!1sen!2see!4v1701380753950!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.4394739453382!2d26.72478451254137!3d58.38598948606277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e887093507%3A0xf565b9af21a68bb8!2sNarva%20mnt%2089%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380818582!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.686354089068!2d26.68752841254005!3d58.36496098772958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3711b94c34f9%3A0x598675490b2a68fd!2sNooruse%207%2C%2050411%20Tartu!5e0!3m2!1sen!2see!4v1701380863033!5m2!1sen!2see"
            // Add URLs for more locations
        ];

        function switchLocation(index) {
            currentLocation = index;
            var mapIframe = document.getElementById('locationMap');
            mapIframe.src = locations[currentLocation];
        }
//script by Chat GPT
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