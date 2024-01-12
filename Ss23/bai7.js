let n = +prompt("Nhập sô nguyên");
let pn=0;
for(let i=1;i<n;i++){
    if(n%i===0){
        pn = pn + i;
    }
}
if(pn === n){
    console.log(n + " là số hoàn hảo");
}else{
    console.log(n + " không là số hoàn hảo");
}