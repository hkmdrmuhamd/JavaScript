let urun = {
    ad : "Elma", 
    fiyat: 10,
    miktar: 5,
    firsFunction : () => {
        console.log("Hello")
    }
    
}

console.log(urun.ad)


let arr = [
    {
        ad : "Elma", 
        fiyat: 10,
        miktar: 5,
        firsFunction : () => {
            console.log("Hello")
        }
    },
    
    {
        ad : "Armut",
        fiyat : 15,
        miktar : 10,
    }
]

console.log(arr[0].firsFunction) // Çıktı sonucu elma meyvesinin içindeki fonksiyonu çağırır.