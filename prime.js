function primecheck(num){
let count=1
for(let i=1;i<=num;i++){
  if(num%i==0){
    count++
  }
}if(count==2){
  return true
}else{
  return false
}
}
let input=67
if(primecheck(input)==true){
  console.log(input+"is a prime number")
}else{
  console.log(input+"is not a prime number")
}