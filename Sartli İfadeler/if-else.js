const age = 21
const name = age == 21 ? "Muhammed" : "Hükümdar"

/*Yukarıdaki kullanımda age değeri eğer 21'e eşitse ekrana Muhammed değilse hükümdar yazdıracaktır. 
? sağlanacak şart için yapılacak kısmı gösterir. : ise sağlanmayan şartlar için kullanılır.*/

// == ve === arasındaki fark şudur: Her ikisi de eşitlik kontrolü yapar fakat === eşittir tip kontrolü de yapar.

if (1 == 1){
    console.log(true)
} else if (1 > 0){
    console.log("1 rakamı 0 rakamından büyüktür.")
} else {
    console.log(false)
}