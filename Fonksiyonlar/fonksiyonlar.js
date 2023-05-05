function addToCart(productname) { //Bu kısımda tip belirleme işlemine gerek yoktur çünkü javascript kendiliğinden tipi tespit eder
    console.log("Sepete eklendi : " + productname)
}

addToCart("Elma")
addToCart("Yumurta")
addToCart("Karpuz")


//Fonksiyon parametresinde default değer belirlemek
function defaultAta(parametre = "Default") { //Bu kısımda tip belirleme işlemine gerek yoktur çünkü javascript kendiliğinden tipi tespit eder
    console.log("Yazdir " + parametre)
}

defaultAta()


//Bir fonksiyonu değişkene atayıp isim vermemize de gerek yoktur yani şu şekilde:

let degisken = function () {
    console.log("Parametresiz fonksiyon")
}

degisken()


function urunSecme(ad,fiyat,miktar) {
    
}  /*bu şekilde bir fonksiyon kullanımı sağlıklı değil çünkü bir bu fonksiyonu farklı page'lerde çağırdığımızda fonksiyonun
parametrelerini doğru giremeyebilirz. Yani miktar yerine kaç tane ürün olduğu girlince karışıklık olabilir.*/


//Üstteki sorunu gidermek için yukarıdaki kullanıma göre 3 tane özelliği olan obje oluşturacağız.

let urun = {ad : "Elma", fiyat: 10,miktar: 5} // Bu kullanım product kısmına obje göndermeyi sağlar bir değişken içerisine obje tanımlamak için süslü parantezler kullanılır

function urunSec(product) {
    console.log("Urun adi: "+product.ad,"Urun fiyati: "+product.fiyat,"Urun miktari: "+product.miktar)
}

urunSec(urun)