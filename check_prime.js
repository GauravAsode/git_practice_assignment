let number=43;
let factor=0;
for(let i=1; i<=number; i++){
if(number%i==0){
factor++;
}
}
if(factor==2){
console.log("Yes");
}else{
console.log('No")
}