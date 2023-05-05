const { Axios, default: axios } = require("axios");

const getAll = async() =>{
    let arr = []
    const data = await axios.get("https://restcountries.com/v3.1/all")//Link üzerinden verileri alır. Bu
    //verileri alma işlemi birkaç saniye sürecei için async fonksiyonu ile birkaç saniye bekletme işlemi gerçekleştirilir.
    arr.push(data)//Çektiğimiz verileri dizinin içerisine atma işlemi.
    console.log(data)
    return arr
}

getAll()