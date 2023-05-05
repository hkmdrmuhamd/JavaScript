//for döngüsü forEach'e göre performans bakımından daha avantajlı olduğu için genellikle for döngüsü tercih edilir.

let array = [1,2,3,4,5,6]
array.forEach(element => {
    console.log("Array Değerleri: " + element)
})