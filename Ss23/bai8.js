let n = +prompt("nhập 1 số nguyên bất kì");
let prime=0;
for(let i=1;i<n;i++){
    for(let j=1;j<=i;j++){
        if(i%j==0){
            prime++;
        }
    }
    if(prime<=2){
        console.log(i);
    }
    prime=0;
}