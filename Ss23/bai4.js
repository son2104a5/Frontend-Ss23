let a = +prompt("nhập a");
let b = +prompt("nhập b");
console.log("Các số chia hết cho " + b + " trong khoảng từ 1 đến " + a + " gồm:")
for(let i=1;i<=a;i++){
    if(b%i==0){
        console.log(i);
    }
}