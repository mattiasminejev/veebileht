//kõik erinevad kaardid järjekorras, et saaks järjenumbriga välja kutsuda
var currentLocation = 0; 
        var locations = [
            //TÜ ühikate kaardid
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8366.613928295701!2d26.7315953!3d58.3823806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36dd6ae4578b%3A0x2259f770c68c040e!2s%C3%9Cli%C3%B5pilaselamu%20Raatuse%2022!5e0!3m2!1sen!2see!4v1701380225610!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.824735925583!2d26.7373686!3d58.36262689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb372eefa806a5%3A0xe34b8dddcaf4924f!2sPurde%2027%2C%2050106%20Tartu!5e0!3m2!1sen!2see!4v1701380380101!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.630681492615!2d26.7282726!3d58.3827651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e79aba9cc3%3A0x9345654a1a9de82b!2sNarva%20mnt%2025%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380484318!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.1258458153734!2d26.716814312540656!3d58.37441448698034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb371ffbeb1637%3A0x15afbda8afa607df!2sPepleri%2014%2C%2051003%20Tartu!5e0!3m2!1sen!2see!4v1701380639134!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.5651908205327!2d26.7273475!3d58.38386949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e7bf5d922b%3A0x239d7ecb60742db2!2sNarva%20mnt%2027%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380702694!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.128413249214!2d26.71039741254064!3d58.3743711869837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb371e4f567e39%3A0x5b4c52be62d0a663!2sTiigi%2014%2C%2050410%20Tartu!5e0!3m2!1sen!2see!4v1701380753950!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.4394739453382!2d26.72478451254137!3d58.38598948606277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e887093507%3A0xf565b9af21a68bb8!2sNarva%20mnt%2089%2C%2051009%20Tartu!5e0!3m2!1sen!2see!4v1701380818582!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.686354089068!2d26.68752841254005!3d58.36496098772958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3711b94c34f9%3A0x598675490b2a68fd!2sNooruse%207%2C%2050411%20Tartu!5e0!3m2!1sen!2see!4v1701380863033!5m2!1sen!2see",
            //Muude ühikate kaardid
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.6603969803787!2d26.691250299999997!3d58.3653988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3711b1c3de27%3A0xeb728acb3734631c!2sNooruse%205%2C%2050411%20Tartu!5e0!3m2!1sen!2see!4v1701509708016!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.6220598190703!2d26.712894812539147!3d58.34917728898049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb374876ad228d%3A0x920f7bda22b2055f!2sKopli%201c%2C%2050115%20Tartu!5e0!3m2!1sen!2see!4v1701509870160!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.6264205343155!2d26.712506512542124!3d58.39969898497585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36f359f7fbd3%3A0xc7619b8d66bb0a53!2sP%C3%B5llu%2011c%2C%2050303%20Tartu!5e0!3m2!1sen!2see!4v1701509921076!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.3447508893237!2d26.692736412541425!3d58.387586785936094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36f92728f203%3A0xf7fcf63c232db5fa!2sTorn%20dormitory!5e0!3m2!1sen!2see!4v1701510029976!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.3921570969956!2d26.691703612541406!3d58.38678738599947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36f92ac3b241%3A0x676089b31436acbd!2s%C3%9Chiselamu%20Betton%2C%20Friedebert%20Tuglase%207%2C%2051014%20Tartu!5e0!3m2!1sen!2see!4v1701510109613!5m2!1sen!2see",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.653316845739!2d26.72901501254111!3d58.38238338634861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36dd6ae4578b%3A0x2259f770c68c040e!2s%C3%9Cli%C3%B5pilaselamu%20Raatuse%2022!5e0!3m2!1sen!2see!4v1701510175712!5m2!1sen!2see"
        ];
//kaardi vahetamiseks funktsioon
        function switchLocation(index) {
            currentLocation = index;
            var mapIframe = document.getElementById('locationMap');
            mapIframe.src = locations[currentLocation];
        }
//võrdluselemendis vasaku võrreldava hinna lahtri muutmise funktsioon
function hindl(newText) {
    document.getElementById('hindl').innerText = newText;
}
//võrdluselemendis vasaku võrreldava nime lahtri muutmise funktsioon
function nimil(newText) {
    document.getElementById('nimil').innerText = newText
}
//võrdluselemendis parema võrreldava hinna lahtri muutmise funktsioon
function hindr(newText) {
    document.getElementById('hindr').innerText = newText;
}
//võrdluselemendis parema võrreldava nime lahtri muutmise funktsioon
function nimir(newText) {
    document.getElementById('nimir').innerText = newText
}
//kõik funktsioonid koostatud Chat GPT abiga