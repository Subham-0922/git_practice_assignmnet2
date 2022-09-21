function primecheck(num){
let factor=0
for(let i=1;i<=num;i++){
  if(num%i==0){
    factor++
  }
}if(factor==2){
  return true
}else{
  return false
}
}
let input=67
if(primecheck(number)==true){
  console.log(input+"is a prime number")
}else{
  console.log(input+"is not a prime number")
}