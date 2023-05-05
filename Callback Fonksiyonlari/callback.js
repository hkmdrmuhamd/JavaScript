const funcOne = (a,cb) => {
    setTimeout(() => {
        cb(a)
    }, 2000);
}

let val = funcOne("2", (val) =>{
    console.log(val);
})