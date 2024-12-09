let num = 3;
function checkPrime(num){
    for(let i=2; i<=num-1; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}console.log(checkPrime(num))

if (num%2==0){
    console.log(even)
}else{
    console.log(odd)
}