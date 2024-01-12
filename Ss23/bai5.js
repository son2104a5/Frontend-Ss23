let rd = Math.floor((Math.random() * 10) +1);
let n;
do{
   n = +prompt("nhập 1 số từ 1-10");
   if(n>rd){
    console.log("nhỏ hơn");
   }else if(n<rd){
    console.log("lớn hơn");
   }else{
    console.log("Đúng rồi");
   }
}while(n != rd);