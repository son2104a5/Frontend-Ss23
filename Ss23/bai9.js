let n = +prompt("nhập 1 số tự nhiên");
let f1=0, f2=0,f=1,fsum=0;
while(fsum < n/2){
    console.log(f);
    f2=f1;
    f1=f;
    fsum += f;
    f=f1+f2;
}