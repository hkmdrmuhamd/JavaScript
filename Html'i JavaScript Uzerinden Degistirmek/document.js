const text = document.getElementById('text')
text.innerText = "Hükümdar" //HTML dosyasındaki div içerisindeki yazıyı Hükümdar olarak değiştirir.

//HTML Dosyasındaki butona tıklama işlemi eklemek için aşağıdaki adımlar izlenir.
const btn = document.getElementById('btn')
btn.addEventListener('click', () =>{ //Butona basılıp basılmadığını kontrol eder.
    text.innerText = "Butona basınca değişti."
})

/*Butona tıklama işlemini almanın bir diğer yolu ise html dosyasında id yerine onclick="funcOne()" yazıp
javascript üzerinde butona tıkladığımızda çalışmasını istediğimiz funcOne() fonksiyonunu yazabiliriz. butonDeneme 
html dsyası üzerinden bu kısma bakılabilir*/