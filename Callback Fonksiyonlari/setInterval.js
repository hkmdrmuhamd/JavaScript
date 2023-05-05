setInterval(() => {
    console.log("muhammed");
}, 1000); //her saniye başı ekrana muhammed yazdırır.

let saniye = 60;
let zamanlayici = setInterval(() => {
    if (saniye === 0){
        clearInterval(zamanlayici); //saniye 0 olursa zamanlayıcı durur.
    } else {
        saniye--;
        console.log(saniye);
    }
}, 1000);