/*For ve While döngülerinde koşul, döngü başlamadan önce kontrol edilir. Do while döngüsünde ise, bu
kontrol her döngüden sonra gerçekleştirilir. Operasyon mantığında do while döngüsü, koşul ne olursa olsun
en az bir kere çalıştırılır.*/
var sayi
var toplam=0

do
{
    sayi=parseInt(prompt("Sayı giriniz"))
    toplam+=sayi
    }
while(sayi!=0)

document.write(toplam)

